import { Card, Button, Modal, Input, Row, Col, message } from 'antd';
import React, { useState, useEffect } from 'react';
import {
  LeftOutlined,
  RightOutlined,
  SyncOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';
import useCloudStore from '@/store/cloud';
import Bucket from '@/module/cloud/buckets';
import passport from '@/assets/icons/default_root_folder_opened.svg';
import cls from './index.module.less';

const LeftTree = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createFileName, setCreateFileName] = useState<any>();
  const [fileList, setFileList] = useState<any[]>([]);
  const [gData, setGData] = useState<any[]>([]);

  const CloudStore: any = useCloudStore();
  useEffect(() => {
    getBaseFileList();
  }, []);
  useEffect(() => {
    setGData(CloudStore.cloudTree);
  }, [CloudStore.cloudTree]);
  useEffect(() => {
    setFileList(CloudStore.cloudData);
  }, [CloudStore.cloudData]);
  const getBaseFileList = async () => {
    const res = await Bucket.GetContent();
    setFileList(res);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = async () => {
    if (!createFileName || createFileName == '') {
      message.warning('文件名不能为空');
      return;
    }
    Bucket.CreateFile(createFileName);
    Bucket.HandleEchoTree(gData, Bucket.Current);
    await getBaseFileList(); // 渲染文档
    CloudStore.setCloudTree(gData);
    setIsModalOpen(false);
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateFileName(e.target.value);
  };
  return (
    <Card className={cls.container}>
      <div className={cls.top}>
        <div className={cls.topBox}>
          <Button shape="circle" type="text" icon={<LeftOutlined />}></Button>
          <Button shape="circle" type="text" icon={<RightOutlined />}></Button>
          <Button shape="circle" type="text" icon={<SyncOutlined />}></Button>
        </div>
        <div className={cls.breadcrumb}></div>
      </div>
      <div className={cls.content}>
        <div className={cls.topBtn}>
          <Button
            icon={<CloudUploadOutlined />}
            className={cls.leftBtn}
            type="primary"
            size="large">
            上传文件
          </Button>
          <Button
            onClick={() => {
              openModal();
            }}
            size="large">
            新建文件夹
          </Button>
        </div>
        <div className={cls.file}>
          <Row gutter={[16, 16]}>
            {fileList.map((el: any) => {
              return (
                <Col key={el.Key} span={2}>
                  <div className={cls.fileBox}>
                    <img className={cls.fileImg} src={passport} alt="" />
                    <div className={cls.fileName}>{el.Name}</div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <Modal
        destroyOnClose
        title="新建文件夹"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Input onChange={changeInput} placeholder="Basic usage" />
      </Modal>
    </Card>
  );
};
export default LeftTree;
