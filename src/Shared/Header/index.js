import React, { useState } from "react";
import aaragloblogo from "../../Assets/aaraglobal-2.png";
import {
  Close,
  ExpandMore,
  Forward,
  Menu as ManuIcon,
  Search,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const opens = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(false);

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const opens2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  console.log(opens2);
  return (
    <>
      <div className="flex max-lg:hidden justify-center fixed h-20 bg-white group text-black shadow-md z-50 w-full px-[15%]">
        <div className="flex font-bold text-[#343a40] pl-40  text-sm items-center relative gap-8">
          <Link to={"/"}>
            <button className="hover:text-[#ff681c]">Home</button>
          </Link>
          <Link to={"/about_us"}>
            <button className="hover:text-[#ff681c]">About-Us</button>
          </Link>
          <div>
            <Button
              className="!hover:text-[#ff681c] !capitalize !text-black"
              id="fade-button"
              aria-controls={opens ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={opens ? "true" : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Servies
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={opens}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <Link to={"/search_engine_optimization"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Search Engine Optimization
                </MenuItem>
              </Link>
              <Link to={"/social_media_marketing"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Social Media Marketing
                </MenuItem>
              </Link>
              <Link to={"/social_engine_marketing"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Social Engine Marketing
                </MenuItem>
              </Link>
              <Link to={"/pay_per_click"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Pay Per Click
                </MenuItem>
              </Link>
              <Link to={"/email_marketing"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Email Marketing
                </MenuItem>
              </Link>
              <Link to={"/content_marketing"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Content Marketing
                </MenuItem>
              </Link>
              <Link to={"/exhibition_and_signge_design"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Exhibition & Signage Design
                </MenuItem>
              </Link>
              <Link to={"/graphic_and_print_desion"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Graphic & Print Design
                </MenuItem>
              </Link>
              <Link to={"/social_media_design"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Social Media Design
                </MenuItem>
              </Link>
              <Link to={"/email_template_desion"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Email Template Design
                </MenuItem>
              </Link>
              <Link to={"/3D_modeling_and_design"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  3D Modeling & Design
                </MenuItem>
              </Link>
              <Link to={"/promo_video_marketing"}>
                <MenuItem className="!text-sm" onClick={handleClose}>
                  Promo Video production & Design..
                </MenuItem>
              </Link>
            </Menu>
          </div>

          <Button
            className="hover:text-[#ff681c] !capitalize !text-black"
            id="fade-button"
            aria-controls={opens2 ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={opens2 ? "true" : undefined}
            onClick={handleClick2}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Tools
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl2}
            open={opens2}
            onClose={handleClose2}
            TransitionComponent={Fade}
          >
            <Link to={"/site_exp"}>
              <MenuItem className="!text-sm" onClick={handleClose}>
                Site Explorer
              </MenuItem>
            </Link>
            <Link to={"/keywords_exp"}>
              <MenuItem className="!text-sm" onClick={handleClose}>
                Keywords Explorer
              </MenuItem>
            </Link>
            <Link to={"/site_audit"}>
              <MenuItem className="!text-sm" onClick={handleClose}>
                Site Audit
              </MenuItem>
            </Link>
            <Link to={"/rank_tracker"}>
              <MenuItem className="!text-sm" onClick={handleClose}>
                Rank Tracker
              </MenuItem>
            </Link>
            <Link to={"/content_explore"}>
              <MenuItem className="!text-sm" onClick={handleClose}>
                Content Explorer
              </MenuItem>
            </Link>
          </Menu>

          <Link to={"/blogs"}>
            <button className="hover:text-[#ff681c]">Blog</button>
          </Link>
          <Link to={"/contact_us"}>
            <button className="hover:text-[#ff681c]">Contact</button>
          </Link>
          <Link to={"/contact_us"}>
            <button className="border hover:bg-[#44474b] hover:text-white bg-[#ededed] p-1 h-fit rounded-full">
              GetQoute Now
              <IconButton>
                <Forward className="!border !rounded-full !bg-[#d6d6d6] !p-1  text-black" />
              </IconButton>
            </button>
          </Link>

          <div className="absolute h-40 -left-40">
            <Link to={"/"}>
              <img
                src={aaragloblogo}
                alt=""
                className="size-60 animate-pulse"
              />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="flex  lg:hidden overflow-x-hidden bg-[#1c2330] justify-between  items-center p-3">
          <Link to={"/"}>
            <img src={aaragloblogo} alt="" className="h-10" />{" "}
          </Link>
          <IconButton onClick={() => setOpen(true)}>
            <ManuIcon className="!text-white" />
          </IconButton>
          <Drawer
            className="lg:!hidden"
            anchor="top"
            open={open}
            onClose={() => setOpen(false)}
          >
            <List>
              <ListItem className="!flex !justify-between !w-fit gap-5">
                <div className="flex border rounded-xl p-1">
                  <input
                    type="search"
                    placeholder="Search Something..."
                    className="outline-none"
                  />
                  <IconButton>
                    <Search />
                  </IconButton>
                </div>
                <div className="pl-20">
                  <IconButton onClick={() => setOpen(false)}>
                    <Close />
                  </IconButton>
                </div>
              </ListItem>

              <Divider />

              <div className="flex flex-col w-[25rem] gap-2 p-2">
                <Link to={"/"}>
                  <ListItemButton
                    onClick={() => setOpen(false)}
                    className="!bg-[#327e9c] !h-12 !rounded-xl !text-white"
                  >
                    Home
                  </ListItemButton>
                </Link>
                <Link to={"/about_us"}>
                  <ListItemButton
                    onClick={() => setOpen(false)}
                    className="!bg-[#327e9c] !h-12 !rounded-xl !text-white"
                  >
                    About Us
                  </ListItemButton>
                </Link>
                <Link>
                  <Accordion className="!bg-[#327e9c] !rounded-xl !text-white">
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <p>Service</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <span className="flex flex-col gap-4">
                        <Link to={"/search_engine_optimization"}>
                          <p onClick={() => setOpen(false)}>
                            Search Engine Optimization (SEO)
                          </p>
                        </Link>
                        <Link to={"/social_media_marketing"}>
                          <p onClick={() => setOpen(false)}>
                            Social Media Marketing (SMM)
                          </p>
                        </Link>
                        <Link to={"/social_engine_marketing"}>
                          <p onClick={() => setOpen(false)}>
                            Search Engine Marketing (SEM)
                          </p>
                        </Link>
                        <Link to={"/pay_per_click"}>
                          <p onClick={() => setOpen(false)}>
                            Pay Per Click (PPC) Campaign
                          </p>
                        </Link>
                        <Link to={"/email_marketing"}>
                          <p onClick={() => setOpen(false)}>Email Marketing</p>
                        </Link>
                        <Link to="/content_marketing">
                          <p onClick={() => setOpen(false)}>
                            Content Marketing
                          </p>
                        </Link>
                        <Link to={"/exhibition_and_signge_design"}>
                          <p onClick={() => setOpen(false)}>
                            Exhibition & Signage Design Services
                          </p>
                        </Link>
                        <Link to={"/graphic_and_print_desion"}>
                          <p onClick={() => setOpen(false)}>
                            Graphic & Print Design
                          </p>
                        </Link>
                        <Link to={"/social_media_design"}>
                          <p onClick={() => setOpen(false)}>
                            Social Media Design
                          </p>
                        </Link>
                        <Link to={"/email_template_desion"}>
                          <p onClick={() => setOpen(false)}>
                            Email Template Design
                          </p>
                        </Link>
                        <Link to={"/3D_modeling_and_design"}>
                          <p onClick={() => setOpen(false)}>
                            3D Modeling & Design
                          </p>
                        </Link>
                        <Link to={"/promo_video_marketing"}>
                          <p onClick={() => setOpen(false)}>
                            Promo Video Production & Design
                          </p>
                        </Link>
                      </span>
                    </AccordionDetails>
                  </Accordion>
                </Link>
                <Link>
                  <Accordion className="!bg-[#327e9c] !rounded-xl !text-white">
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <p>Tools</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <span className="flex flex-col gap-4">
                        <Link to={"/site_exp"}>
                          <p onClick={() => setOpen(false)}>Site Explorer</p>
                        </Link>
                        <Link to={"/keywords_exp"}>
                          <p onClick={() => setOpen(false)}>
                            Keywords Explorer
                          </p>
                        </Link>
                        <Link to={"/site_audit"}>
                          <p onClick={() => setOpen(false)}>Site Audit</p>
                        </Link>
                        <Link to={"/rank_tracker"}>
                          <p onClick={() => setOpen(false)}>Rank Tracker</p>
                        </Link>
                        <Link to={"/content_explore"}>
                          <p onClick={() => setOpen(false)}>Content Exlorer</p>
                        </Link>
                      </span>
                    </AccordionDetails>
                  </Accordion>
                </Link>
                <Link to={"/blogs"}>
                  <ListItemButton
                    onClick={() => setOpen(false)}
                    className="!bg-[#327e9c] !h-12 !rounded-xl !text-white"
                  >
                    Blog
                  </ListItemButton>
                </Link>
                <Link to={"/contact_us"}>
                  <ListItemButton
                    onClick={() => setOpen(false)}
                    className="!bg-[#327e9c] !h-12 !rounded-xl !text-white"
                  >
                    Contact
                  </ListItemButton>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="border bg-[#f9f7f7] w-fit rounded-full px-1 ml-24 mt-10"
                >
                  Get Qoute Now
                  <IconButton>
                    <Forward className="!border !rounded-full !p-1" />
                  </IconButton>
                </button>
              </div>
            </List>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Header;
