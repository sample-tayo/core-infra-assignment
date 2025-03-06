import { ReactNode } from "react";
import { ROUTES } from "./routes.constant";
import {
  BuildingIcon,
  ATMCard2Icon,
  CardCheckIcon,
  CardInclinedIcon,
  GraphIcon,
  StackedLayerIcon,
  ListIcon,
  MapIcon,
  SliderHorizontalIcon,
  User2Icon,
  UserGroupIcon,
  UserShieldIcon,
  HomeIcon,
} from "../components/icons";

export const NAV_LINKS = [
  {
    label: "Branches",
    href: "/branches",
    icon: <BuildingIcon />,
  },
  {
    label: "Roles",
    href: "/roles",
    icon: <UserShieldIcon />,
  },
  {
    label: "Users",
    href: "/users",
    icon: (
      <span className="-mr-0.5 text-lg">
        <UserGroupIcon />
      </span>
    ),
  },
  {
    label: "Card Scheme",
    href: "/card-scheme",
    icon: <SliderHorizontalIcon />,
  },
  {
    label: "Card Profile",
    href: `/${ROUTES.CARDS.PROFILE.LIST}`,
    icon: (
      <span className="-mr-0.5 text-lg">
        <CardInclinedIcon />
      </span>
    ),
  },
  {
    label: "Card Request",
    href: `/${ROUTES.CARDS.REQUEST.LIST}`,
    icon: <CardCheckIcon />,
  },
  {
    label: "Stock",
    href: "/stock",
    icon: (
      <span className="-mr-0.5 text-lg">
        <GraphIcon />
      </span>
    ),
  },
  {
    label: "Cards",
    href: "/cards",
    icon: (
      <span className="-mr-0.5 text-lg">
        <ATMCard2Icon />
      </span>
    ),
  },
  {
    label: "Authorization List",
    href: "/authorization-list",
    icon: <ListIcon />,
  },
  {
    label: "Authorization Queue",
    href: "/authorization-queue",
    icon: <StackedLayerIcon />,
  },
  {
    label: "Trail",
    href: "/trail",
    icon: <MapIcon />,
  },
  {
    label: "Account",
    href: "/account",
    icon: <User2Icon />,
  },
];

export const BREADCRUMBS_NAV_LINKS: Record<
  string,
  { label: string; href: string; icon?: ReactNode }
> = {
  overview: {
    label: "Dashboard",
    href: `/${ROUTES.ROOT}`,
    icon: <HomeIcon />,
  },
  branches: {
    label: "Branches",
    href: "/branches",
    icon: <BuildingIcon />,
  },
  roles: {
    label: "Roles",
    href: "/roles",
    icon: <UserShieldIcon />,
  },
  users: {
    label: "Users",
    href: "/users",
    icon: (
      <span className="-mr-0.5 text-lg">
        <UserGroupIcon />
      </span>
    ),
  },
  "card-scheme": {
    label: "Card Scheme",
    href: "/card-scheme",
    icon: <SliderHorizontalIcon />,
  },
  "card-profile": {
    label: "Card Profile",
    href: `/${ROUTES.CARDS.PROFILE.LIST}`,
    icon: (
      <span className="-mr-0.5 text-lg">
        <CardInclinedIcon />
      </span>
    ),
  },
  create: {
    label: "Create Profile",
    href: `/${ROUTES.CARDS.PROFILE.CREATE}`,
  },
  edit: {
    label: "Edit Profile",
    href: `/${ROUTES.CARDS.PROFILE.EDIT}`,
  },
  "card-request": {
    label: "Card Request",
    href: `/${ROUTES.CARDS.REQUEST.LIST}`,
    icon: <CardCheckIcon />,
  },
  view: {
    label: "Request Details",
    href: `/${ROUTES.CARDS.REQUEST.DETAILS}`,
  },
  stock: {
    label: "Stock",
    href: "/stock",
    icon: (
      <span className="-mr-0.5 text-lg">
        <GraphIcon />
      </span>
    ),
  },
  cards: {
    label: "Cards",
    href: "/cards",
    icon: (
      <span className="-mr-0.5 text-lg">
        <ATMCard2Icon />
      </span>
    ),
  },
  "authorization-list": {
    label: "Authorization List",
    href: "/authorization-list",
    icon: <ListIcon />,
  },
  "authorization-queue": {
    label: "Authorization Queue",
    href: "/authorization-queue",
    icon: <StackedLayerIcon />,
  },
  trail: {
    label: "Trail",
    href: "/trail",
    icon: <MapIcon />,
  },
  account: {
    label: "Account",
    href: "/account",
    icon: <User2Icon />,
  },
};
