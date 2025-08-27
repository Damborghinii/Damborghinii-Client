import Close from "../icons/close.svg?react";
import DigitalArt from "../icons/digitalArt.svg?react";
import Music from "../icons/music.svg?react";
import Image from "../icons/image.svg?react";
import File from "../icons/file.svg?react";
import RegisterLoading from "../icons/register_loading.svg?react";
import Check from "../icons/check_icon.svg?react";
import Deny from "../icons/denied_icon.svg?react";
import SignUpComplete from "../icons/signup_complete.svg?react";
import Logo from "../icons/logo.svg?react";
import ArrowDown from "../icons/arrow_down.svg?react";
import ArrowUp from "../icons/arrow_up.svg?react";
import Wallet from "../icons/wallet.svg?react";
import { IcHome, IcMyMusic, IcWallet } from "@assets/svg";

export const commonIcons = {
  close: Close,
};

export const bottomAppBarIcons = {
  main: IcHome,
  myMusic: IcMyMusic,
  wallet: IcWallet,
};

export const nftIcons = {
  digital_art: DigitalArt,
  music: Music,
};

export const registerNftIcons = {
  image: Image,
  file: File,
  register_loading: RegisterLoading,
  arrow_down: ArrowDown,
  arrow_up: ArrowUp,
};

export const signUpIcons = {
  check: Check,
  deny: Deny,
  signup_complete: SignUpComplete,
};

export const LogoIcons = {
  logo: Logo,
};

export const MenuIcons = {
  wallet: Wallet,
};
