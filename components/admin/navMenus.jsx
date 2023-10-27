import SVG from '../../files/svg'
import {useState, useEffect} from 'react'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'

const NavMenus = ({
  account,
  accessToken,
  resetUI,
  modal,
  setModal,
  message,
  setMessage,
  view,
  setView,
  loading,
  setLoading,
  selectID,
  setSelectID,
  controls,
  setControls,
  resetCheckboxes,
  edit,
  setEdit,
  editType,

  //// DATA
  data,
  allData,
  setAllData,
  setModalData,
  sortOrder,

  //// REDUX
  stateData,
  stateMethod,
  resetMethod,

  //// CRUD
  submitCreate,
  submitUpdate,
  submitDeleteRow
  
  }) => {

  const [allMenus, setAllNews] = useState(data ? data : [])
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_nav_menus'))}>
          <SVG svg={'nav'}></SVG>
          <span>View Menus</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('create_nav_menu'))}>
          <SVG svg={'list-2'}></SVG>
          <span>Create Menu</span>
        </div>
      </div>
      }
      { view == 'all_nav_menus' &&
      <AdminTable
        accessToken={accessToken}
        title={'Menus'}
        typeOfData={'navMenus'}
        modalType={'create_nav_menu'}
        modalDataType={{key: 'navMenus', caseType: 'CREATE_NAV_MENU'}}
        componentData={allMenus}
        originalData={allData}
        account={account}
        loading={loading}
        setLoading={setLoading}
        selectID={selectID}
        setSelectID={setSelectID}
        controls={controls}
        setControls={setControls}
        setModalData={setModalData}
        setModal={setModal}
        sortOrder={sortOrder}
        resetCheckboxes={resetCheckboxes}
        setEdit={setEdit}
        editType={editType}
        submitDeleteRow={submitDeleteRow}
        message={message}
        setMessage={setMessage}
        setAllData={setAllData}
        deletePath="navigation/delete-nav-menu"
        view={'all_nav_menus'}
        fileType="file"
        fileLocation="navMenus"
      >
      </AdminTable>
      }
      <AdminModals
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        setMessage={setMessage}
        message={message}
        loading={loading}
        setLoading={setLoading}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={'CREATE_NAV_MENU'}
        resetMethod={resetMethod}
        resetType={'RESET_NAV_MENU'}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </AdminModals>
    </>
  )
}

export default NavMenus