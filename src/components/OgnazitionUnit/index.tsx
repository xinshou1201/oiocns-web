import React, { useEffect, useState } from 'react';
import { Avatar, Space, Typography } from 'antd';
import styles from './index.module.less';
import { CaretDownOutlined } from '@ant-design/icons';
import useStore from '@/store';
import CompanyServices from '@/module/company';
type OrganizationalUnitsProps = {};

// 菜单列表项
const OrganizationalItem = (item: { name: string; icoName: string }) => {
  return (
    <Space>
      <Avatar className={styles.avatar} size={24}>
        {item.icoName}
      </Avatar>
      <Typography.Text>{item.name}</Typography.Text>
    </Space>
  );
};

/* 组织单位头部左侧组件 */
const OrganizationalUnits: React.FC<OrganizationalUnitsProps> = () => {
  const user = useStore((state) => state.user);
  //   console.log('user', user);
  const [current] = useState<any>({
    name: user.userName,
    icoName: user.userName.substring(0, 1),
  });
  const [menuList, setMenuList] = useState<any[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const getList = async () => {
    const { data } = await CompanyServices.getJoinedCompany({
      current: 1,
      pageSize: 100,
    });
    setMenuList(data);
  };
  useEffect(() => {
    // 获取用户加入的单位组织
    getList();
  }, []);
  return (
    <div className={styles.menu}>
      <Space onClick={() => setShowMenu(!showMenu)} className={styles['current-item']}>
        {OrganizationalItem(current)}

        <CaretDownOutlined
          className={`${styles[`down-icon`]} ${showMenu ? styles.active : ''}`}
        />
      </Space>
      <div className={`${styles.list} ${showMenu ? styles.active : ''}`}>
        {menuList.map((n) => OrganizationalItem(n))}
        <Typography.Text>
          How To Ask Questions The Smart Way Copyright © 2001,2006,2014 Eric S. Raymond,
          Rick Moen 本指南英文版版权为 Eric S. Raymond, Rick Moen 所有。
          原文网址：http://www.catb.org/~esr/faqs/smart-questions.html Copyleft 2001 by
          D.H.Grand(nOBODY/Ginux), 2010 by Gasolin, 2015 by Ryan Wu 本中文指南是基于原文
          3.10 版以及 2010 年由 Gasolin 所翻译版本的最新翻译； 协助指出翻译问题，请发
          issue，或直接发 pull request 给我。
        </Typography.Text>
      </div>
    </div>
  );
};

export default OrganizationalUnits;
