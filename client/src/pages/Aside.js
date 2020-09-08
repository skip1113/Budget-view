import React from 'react';
// import { useIntl } from 'react-intl';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaHeart } from 'react-icons/fa';
import { GiPayMoney, GiLightBulb } from 'react-icons/gi';
// import sidebarBg from './assets/bg1.jpg';

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    // const intl = useIntl();
    return (
        <ProSidebar
            //   image={image ? sidebarBg : false}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {/* {intl.formatMessage({ id: 'budget view' })} */}
                    Budget View
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">
                            {/* {intl.formatMessage({ id: 'new' })} */}
                            New
                            </span>}
                        to="/"
                    >
                        {/* {intl.formatMessage({ id: 'Dashboard' })} */}
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<GiPayMoney />} to="/spending" href="/spending"> 
                    {/* {intl.formatMessage({ id: 'Spendings' })} */}
                    Spendings
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title="Savings"
                        // {intl.formatMessage({ id: 'Savings' })}
                        icon={<FaGem />}
                        to="/saving"
                    >
                        {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem> */}
                        {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem> */}
                        {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem> */}
                    </SubMenu>
                    <SubMenu
                        prefix={<span className="badge gray">3</span>}
                        title="Tip Calculator"
                        // {intl.formatMessage({ id: 'Tip Calculator' })}
                        icon={<FaHeart />}
                        to="/tipcalc"
                    >
                        {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem> */}
                        {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem> */}
                        {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem> */}
                    </SubMenu>
                    <SubMenu title="Info" icon={<FaList />} to="/info">
                        {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem> */}
                        {/* <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem> */}
                        {/* <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
                            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu> */}
                    </SubMenu>
                    <MenuItem icon={<GiLightBulb />} to="/tips"> 
                    {/* {intl.formatMessage({ id: 'Tips & Advice' })} */}
                    <h2>Tips & Advice</h2>
                    </MenuItem>

                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span> 
                            {/* {intl.formatMessage({ id: 'viewSource' })} */}
                            ViewSource
                            </span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;