import { CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Skeleton, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import CompanyServices from '@/module/company';
import PersonServices from '@/module/person';
import useStore from '@/store';

import styles from './index.module.less';
type OrganizationalUnitsProps = {};

type CurrentSpaceType = {
  name?: string;
  id?: string;
};
// 菜单列表项
const OrganizationalItem = (item: CurrentSpaceType) => {
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
const OrganizationalUnits: React.FC<OrganizationalUnitsProps> = () => {
  const { user, getUserInfo, setUser } = useStore((state) => ({ ...state }));
  const [current, setCurrent] = useState<CurrentSpaceType>();
  const [menuList, setMenuList] = useState<CurrentSpaceType[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  // 获取工作单位列表
  const getList = async () => {
    const { data } = await CompanyServices.getJoinedCompany({
      current: 1,
      pageSize: 100,
    });
    setMenuList([...data, { id: user?.workspaceId, name: user?.workspaceName }]);
  };
  // 选中组织单位后进行空间切换
  const handleClickMenu = async (item: CurrentSpaceType) => {
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
        {current ? OrganizationalItem(current) : <Skeleton active />}
        <CaretDownOutlined
          className={`${styles[`down-icon`]} ${showMenu ? styles.active : ''}`}
        />
      </Space>
      <div className={`${styles.list} ${showMenu ? styles.active : ''}`}>
        {menuList.map((n) =>
          current && n.id !== current.id ? (
            <div className={styles.item} onClick={() => handleClickMenu(n)}>
              {OrganizationalItem(n)}
            </div>
          ) : (
            ''
          ),
        )}
      </div>
    </div>
  ) : (
    <Skeleton active />
  );
};

export default OrganizationalUnits;
