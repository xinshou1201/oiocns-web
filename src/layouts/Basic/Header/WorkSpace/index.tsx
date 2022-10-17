import { CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, Row, Skeleton, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import CompanyServices from '@/module/company';
import PersonServices from '@/module/person';
import { SpaceType } from '@/store/type';

import useStore from './../../../../store';
import styles from './index.module.less';

type OrganizationalUnitsProps = {};

// 菜单列表项
const MenuItem = (item: SpaceType) => {
  return item && item.name ? (
    <Space>
      <Avatar className={styles.avatar} size={32}>
        {item?.name.substring(0, 1)}
      </Avatar>
      <Typography.Text>{item?.name}</Typography.Text>
    </Space>
  ) : (
    ''
  );
};

/* 组织单位头部左侧组件 */
const WorkSpace: React.FC<OrganizationalUnitsProps> = () => {
  const { user, getUserInfo, setUser, userSpace } = useStore((state) => ({ ...state }));
  const [current, setCurrent] = useState<SpaceType>();
  const [menuList, setMenuList] = useState<SpaceType[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // 获取工作单位列表
  const getList = async () => {
    const { data } = await CompanyServices.getJoinedCompany({
      current: 1,
      pageSize: 100,
    });
    setMenuList([...data, userSpace]);
  };

  // 选中组织单位后进行空间切换
  const handleClickMenu = async (item: SpaceType) => {
    if (!item?.id) return;
    const { data, success } = await PersonServices.changeWorkspace({
      id: item?.id,
    });
    if (success) {
      setUser(data);
      sessionStorage.setItem('TOKEN', data.accessToken);
      await getUserInfo(); // 获取新的用户信息
      setCurrent({
        name: item?.name,
        id: item?.id,
      });
      setShowMenu(false);
    }
  };

  useEffect(() => {
    // 获取用户加入的单位组织
    if (user) {
      getList();
      setCurrent({
        name: user?.workspaceName,
        id: user?.workspaceId,
      });
    }
  }, []);

  return user ? (
    <div className={styles.menu} onMouseLeave={() => setShowMenu(false)}>
      <Space onClick={() => setShowMenu(!showMenu)} className={styles['current-item']}>
        {current ? MenuItem(current) : <Skeleton active />}
        <CaretDownOutlined
          className={`${styles[`down-icon`]} ${showMenu ? styles.active : ''}`}
        />
      </Space>

      <div className={`${styles.list} ${showMenu ? styles.active : ''}`}>
        <div className={styles[`menu-list`]}>
          {menuList.map((n) =>
            current && n.id !== current.id ? (
              <div className={styles.item} onClick={() => handleClickMenu(n)} key={n.id}>
                {MenuItem(n)}
              </div>
            ) : (
              ''
            ),
          )}
        </div>
        <Divider className={styles.divider} />
        <Row justify="space-around">
          <Col span={12}>
            <Button type="text" block>
              创建单位
            </Button>
          </Col>
          <Col span={12}>
            <Button type="text" block>
              加入单位
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  ) : (
    <Skeleton active />
  );
};

export default WorkSpace;
