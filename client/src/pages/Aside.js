import React from 'react';
import { useIntl } from 'react-intl';
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
    const intl = useIntl();
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
                    {intl.formatMessage({ id: 'budget view' })}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
                    >
                        {intl.formatMessage({ id: 'Dashboard' })}
                    </MenuItem>
                    <MenuItem icon={<GiPayMoney />}> {intl.formatMessage({ id: 'Spendings' })}</MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title={intl.formatMessage({ id: 'Savings' })}
                        icon={<FaGem />}
                    >
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
                    </SubMenu>
                    <SubMenu
                        prefix={<span className="badge gray">3</span>}
                        title={intl.formatMessage({ id: 'Tip Calculator' })}
                        icon={<FaHeart />}
                    >
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
                    </SubMenu>
                    <SubMenu title={intl.formatMessage({ id: 'Info' })} icon={<FaList />}>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
                        <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
                        <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
                            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
                            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                    <MenuItem icon={<GiLightBulb />}> {intl.formatMessage({ id: 'Tips & Advice' })}</MenuItem>

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
                        <span> {intl.formatMessage({ id: 'viewSource' })}</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;