import React from "react";
import "./Header.scss";
import jsw_vaani_logo from "../../assets/images/jsw_vaani_logo.svg";
import location_on from "../../assets/images/location_on.svg";
import a from "../../assets/images/a.svg";
import accessibility_new from "../../assets/images/accessibility_new.svg";
import login from "../../assets/images/login.svg";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Header = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["About us", "Partners", "Services", "Events", "Contact us"].map(
          (text, index) => (
            <>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText
                    className="hamburger__item"
                    primaryTypographyProps={{
                      sx: {
                        textAlign: "center",
                        background:
                          "linear-gradient(to right, #1751A4, #BF2C2D)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "Barlow",
                        fontWeight: 600,
                        fontSize: "16px",
                        lineHeight: "16.8px",
                      },
                    }}
                    primary={text}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          )
        )}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  textAlign: "center",
                  fontFamily: "Barlow",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "16.8px",
                },
              }}
            >
              <div className="header__location">
                <img src={location_on} alt="location logo" />
                <span className="header__location__text">Baranagar</span>
              </div>
            </ListItemText>
          </ListItemButton>
        </ListItem>
          <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  textAlign: "center",
                },
              }}
            >
              <img src={a} alt="a logo" />
            </ListItemText>
          </ListItemButton>
        </ListItem>
          <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  textAlign: "center",
                },
              }}
            >
              <img src={accessibility_new} alt="accessibility logo" />
            </ListItemText>
          </ListItemButton>
        </ListItem>
          <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText   primaryTypographyProps={{
                sx: {
                  textAlign: "center",
                  fontFamily: "Barlow",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "16.8px",
                },
              }}>
              <div className="header__login" style={{display:'flex', gap:'5px',justifyContent:'center'}}>
                <span className="header__login__text">Login</span>
                <img src={login} alt="login arrow logo" />
              </div>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div className="headerParent w-100 h-100 mb-5">
      <div className="header">
        <div className="header__upper">
          <div className="header__image">
            <img src={jsw_vaani_logo} alt="jsw vaani logo" />
          </div>
          <div className="header__content">
            <div className="header__location">
              <img src={location_on} alt="location logo" />
              <span className="header__location__text">Baranagar</span>
            </div>
            <img src={a} alt="a logo" />
            <img src={accessibility_new} alt="accessibility logo" />
            <div className="header__login">
              <span className="header__login__text">Login</span>
              <img src={login} alt="login arrow logo" />
            </div>
            <div className="header__hamburger">
              <Button onClick={toggleDrawer("top", true)}>
                <MenuRoundedIcon style={{ color: "black" }} />
              </Button>
              <Drawer
                anchor="top"
                open={state.top}
                onClose={toggleDrawer("top", false)}
              >
                {list("top")}
              </Drawer>
            </div>
          </div>
        </div>
        <div className="header__lower">
          <div className="headerNav">
            <ul className="headerNav__list">
              <li className="headerNav__item">
                <a className="headerNav__link" href="#">
                  About us
                </a>
                <ul className="headerNav__sublist">
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 1
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 2
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="headerNav__item">
                <a className="headerNav__link" href="#">
                  Partners
                </a>
                <ul className="headerNav__sublist">
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 1
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 2
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="headerNav__item">
                <a className="headerNav__link" href="#">
                  Services
                </a>
                <ul className="headerNav__sublist">
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 1
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 2
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="headerNav__item">
                <a className="headerNav__link" href="#">
                  Events
                </a>
                <i className="fa-solid fa-caret-down"></i>
                <ul className="headerNav__sublist">
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 1
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 2
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 3
                    </a>
                  </li>
                </ul>
              </li>
              <li className="headerNav__item">
                <a className="headerNav__link" href="#">
                  Contact us
                </a>
                <ul className="headerNav__sublist">
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 1
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 2
                    </a>
                  </li>
                  <hr></hr>
                  <li className="headerNav__subitem">
                    <a className="headerNav__sublink" href="#">
                      Sub-item 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
