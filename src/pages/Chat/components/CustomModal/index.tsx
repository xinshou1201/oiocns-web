// const CustomModal: React.FC = () => {
//   return (
//     <Modal
//       title="邀请好友"
//       open={isModalOpen}
//       onOk={handleOk}
//       onCancel={handleCancel}
//       getContainer={false}>
//       <div className={detailStyle.invitateBox}>
//         {state.friendsData?.length > 0 ? (
//           <>
//             {state.friendsData?.map((item: any, index: any) => {
//               return (
//                 <div
//                   key={item.id}
//                   className={`${detailStyle.invitateBox} ${detailStyle.box}`}
//                   onClick={() => {
//                     onClickBox(item, index);
//                   }}>
//                   <div className={`${detailStyle.invitateBox} ${detailStyle.flex}`}>
//                     <HeadImg name={item?.name} label={''} />
//                     <div className={`${detailStyle.invitateBox} ${detailStyle.name}`}>
//                       {item.name}
//                     </div>
//                   </div>
//                   <div
//                     className={`${detailStyle.invitateBox} ${detailStyle.btn}`}
//                     style={{
//                       backgroundColor: `${state?.ids.includes(item.id) ? '#466DFF' : ''}`,
//                     }}>
//                     {state?.ids.includes(item.id) ? (
//                       <div
//                         className={`${detailStyle.invitateBox} ${detailStyle.btn} ${detailStyle.in}`}></div>
//                     ) : (
//                       ''
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </>
//         ) : (
//           <Empty description={<span>暂无可拉取好友</span>} />
//         )}
//       </div>
//     </Modal>
//   );
// };

// export default CustomModal;
