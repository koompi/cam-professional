import { Component } from "solid-js";
import { useLocation, A } from "@solidjs/router";

export type Nav = {
  title: string;
  link: string;
  isIcon: boolean;
  icon: any;
};

const NavActive: Component<Nav> = (props) => {
  const { title, link, isIcon, icon } = props;
  const localtion = useLocation();

  return (
    <A
      href={link}
      class={`${
        localtion.pathname === link && "text-primary font-extrabold"
      } text-gray-900 flex cursor-pointer items-center gap-x-2 rounded-md py-2 px-4 hover:opacity-80`}
      end={true}
    >
      {isIcon && icon}
      <span class="font-medium">{title}</span>
    </A>
  );
};

export default NavActive;
