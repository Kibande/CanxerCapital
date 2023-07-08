import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Facebook, Twitter, DiscordIcon } from "../utilis/AllSvgs";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *::not(:last-child) {
    margin: 0%.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.current_icon_color};
`;

const SocialIcons = (props) => {
    const theme = useTheme();
    var current_icon_color =theme.text;
    return (
        <Icons>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1 }}
            >
                <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{ pathname: "https://github.com/Kibande" }}
                >
                    <Github width={25} height={25} fill={current_icon_color} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.2 }}
            >
                <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{ pathname: "https://twitter.com" }}
                >
                    <Twitter width={25} height={25} fill={current_icon_color} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.4 }}
            >
                <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{ pathname: "https://facebook.com" }}
                >
                    <Facebook width={25} height={25} fill={current_icon_color} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.1, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.6 }}
            >
                <NavLink
                    style={{ color: "inherit" }}
                    target="_blank"
                    to={{ pathname: "https://discord.com" }}
                >
                    <DiscordIcon width={25} height={25} fill={current_icon_color} />
                </NavLink>
            </motion.div>
            <Line
                show_mobile_display={props.show_mobile_display}
                current_icon_color={current_icon_color}
                initial={{
                    height: 0,
                }}
                animate={{
                    height: "10vh",
                }}
                transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.8,
                }}
            />
        </Icons>
    );
};

export default SocialIcons;
