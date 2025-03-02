'use client';

import Link from 'next/link';
import React, { Children, useEffect, useRef, useState } from 'react';
import { IoHome } from 'react-icons/io5';
import { MdPerson3 } from 'react-icons/md';
import { GiBank, GiCash } from 'react-icons/gi';
import { FaCartArrowDown } from 'react-icons/fa';
import { IoBagHandle } from 'react-icons/io5';
import { TbTruckReturn } from 'react-icons/tb';
import { TbShoppingCartDollar } from 'react-icons/tb';
import { FaBoxesPacking, FaPeopleGroup } from 'react-icons/fa6';
import { RiFileDamageFill, RiFileDamageLine } from 'react-icons/ri';
import { GiWeight } from 'react-icons/gi';
import { RiProductHuntFill } from 'react-icons/ri';
import { AiFillProduct } from 'react-icons/ai';
import { GiExpense } from 'react-icons/gi';
import { TbBrandSupernova } from 'react-icons/tb';
import { GiWallet } from 'react-icons/gi';
import { FaSms } from 'react-icons/fa';
import { FaPeopleCarry } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { MdManageAccounts } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { Ri24HoursLine } from 'react-icons/ri';
import { IoCalendarNumberSharp } from 'react-icons/io5';
import { TbReport } from 'react-icons/tb';
import { RiCalendarScheduleFill } from 'react-icons/ri';
import { TbReportMoney } from 'react-icons/tb';
import { BiSolidReport } from 'react-icons/bi';
import { PiBoxArrowDownBold } from 'react-icons/pi';
import { FaBoxTissue } from 'react-icons/fa6';
import { GiProgression } from 'react-icons/gi';
import { MdOutlineSettings } from 'react-icons/md';
import { BiErrorAlt } from 'react-icons/bi';
import { FaUserCog } from 'react-icons/fa';
import { SiNginxproxymanager } from 'react-icons/si';
import { MdBackup } from 'react-icons/md';
import Image from 'next/image';
import logo from '../../../../../assets/logo.png';
import { usePathname } from 'next/navigation';

import {
  Component,
  UserRound,
  Landmark,
  Banknote,
  Wallet,
  SmartphoneNfc,
  BadgeDollarSign,
  LayoutList,
  LayoutDashboard,
  MailPlus,
  Users,
  PackageCheck,
  UserCog,
  ChartColumn,
  CalendarClock,
  CalendarDays,
  FileClock,
  CalendarCog,
  FileChartColumnIncreasing,
  PackageMinus,
  UserRoundSearch,
  ChartNoAxesCombined,
  Receipt,
  FileBox,
  CalendarPlus,
  CalendarFold,
  Cog,
  BadgeInfo,
  DatabaseBackup,
  UserCheck,
  Settings,
  AlignJustify,
  Building2,
  PackageX,
  FileX,
  UsersRound,
} from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { BaggageClaim } from 'lucide-react';
import { Truck } from 'lucide-react';
import { RotateCcwSquare } from 'lucide-react';
import { Boxes } from 'lucide-react';
import { Weight } from 'lucide-react';
import { Package } from 'lucide-react';
import { Ribbon } from 'lucide-react';

const homePrimaryLinks = [
  {
    href: '/home',
    label: 'Dashboard',
    icon: <LayoutDashboard size={20} strokeWidth={1} />,
    pathname: '/home',
  },
  {
    href: '/Owners',
    label: 'Owners',
    icon: <UserRound size={20} strokeWidth={1} />,
    pathname: '/Owners',
  },
  {
    href: '/Bank_Accounts',
    label: 'Bank Accounts',
    icon: <Landmark size={20} strokeWidth={1} />,
    pathname: '/Bank_Accounts',
  },
  // Uncomment and add if necessary:
  // {
  //   href: "/Cash_Book",
  //   label: "Cash Book",
  //   icon: <Banknote size={20} strokeWidth={1} />,
  //   pathname: "/Cash_Book"
  // }
];

const salesPurchaseLinks = [
  {
    href: '/POS',
    label: 'POS',
    icon: <ShoppingCart size={20} strokeWidth={1} />,
  },
  {
    href: '/Sales',
    label: 'Sales',
    icon: <ShoppingBag size={20} strokeWidth={1} />,
  },
  {
    href: '/Returns',
    label: 'Returns',
    icon: <RotateCcwSquare size={20} strokeWidth={1} />,
  },
  {
    href: '/Purchase',
    label: 'Purchase',
    icon: <BaggageClaim size={20} strokeWidth={1} />,
  },
  { href: '/Stock', label: 'Stock', icon: <Boxes size={20} strokeWidth={1} /> },
  {
    href: '/Damages',
    label: 'Damages',
    icon: <FileX size={20} strokeWidth={1} />,
  },
];

const productLinks = [
  {
    href: '/Products',
    label: 'Products',
    icon: <Package size={20} strokeWidth={1} />,
  },
  {
    href: '/Units',
    label: 'Units',
    icon: <Weight size={20} strokeWidth={1} />,
  },
  {
    href: '/Categories',
    label: 'Categories',
    icon: <Component size={20} strokeWidth={1} />,
  },
  {
    href: '/Brands',
    label: 'Brands',
    icon: <Ribbon size={20} strokeWidth={1} />,
  },
];

const expensesLinks = [
  {
    href: '/Expenses',
    label: 'Expenses',
    icon: <Wallet size={20} strokeWidth={1} />,
  },
  {
    href: '/Payments',
    label: 'Payments',
    icon: <BadgeDollarSign size={20} strokeWidth={1} />,
  },
];

const peopleLinks = [
  {
    href: '/Customers',
    label: 'Customers',
    icon: <Users size={20} strokeWidth={1} />,
  },
  {
    href: '/Suppliers',
    label: 'Suppliers',
    icon: <UsersRound size={20} strokeWidth={1} />,
  },
  {
    href: '/Employee-and-Salary',
    label: 'Employee And Salary',
    icon: <UserCog size={20} strokeWidth={1} />,
  },
];

const reportLinks = [
  {
    href: '/Profit-Loss-Report',
    label: 'Profit Loss Report',
    icon: <ChartColumn size={20} strokeWidth={1} />,
  },
  {
    href: '/Today-Report',
    label: 'Today Report',
    icon: <CalendarDays size={20} strokeWidth={1} />,
  },
  {
    href: '/Current-Month-Report',
    label: 'Current Month Report',
    icon: <CalendarClock size={20} strokeWidth={1} />,
  },
  {
    href: '/Summary-Report',
    label: 'Summary Report',
    icon: <FileClock size={20} strokeWidth={1} />,
  },
  {
    href: '/Daily-Report',
    label: 'Daily Report',
    icon: <CalendarCog size={20} strokeWidth={1} />,
  },
  {
    href: '/Customer-Due-Report',
    label: 'Customer Due Report',
    icon: <TbReportMoney size={22} strokeWidth={1} />,
  },
  {
    href: '/Supplier-Due-Report',
    label: 'Supplier Due Report',
    icon: <FileChartColumnIncreasing size={20} strokeWidth={1} />,
  },
  {
    href: '/Low-Stock-Report',
    label: 'Low Stock Report',
    icon: <PackageMinus size={20} strokeWidth={1} />,
  },
  {
    href: '/Top-Customer',
    label: 'Top Customer',
    icon: <UserRoundSearch size={20} strokeWidth={1} />,
  },
  {
    href: '/Top-Product',
    label: 'Top Product',
    icon: <ChartNoAxesCombined size={20} strokeWidth={1} />,
  },
  {
    href: '/Category-Wise-Report',
    label: 'Category Wise Report',
    icon: <FileBox size={20} strokeWidth={1} />,
  },
  {
    href: '/Purchase-Report',
    label: 'Purchase Report',
    icon: <Receipt size={20} strokeWidth={1} />,
  },
];

const menuItems = [
  {
    name: 'Settings',
    href: '/Settings',
    icon: <Settings size={20} strokeWidth={1} />,
  },
  {
    name: 'Roles And Permissions',
    href: '/Roles-And-Permissions',
    icon: <BadgeInfo size={20} strokeWidth={1} />,
  },
  {
    name: 'Users',
    href: '/Users',
    icon: <UserCheck size={20} strokeWidth={1} />,
  },
  {
    name: 'Assets Management',
    href: '/Assets-Management',
    icon: <Cog size={20} strokeWidth={1} />,
  },
];

export default function Sidebar() {
  const spanClass =
    ' block h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700';

  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const sidebarRef = useRef(null); // Ref for the sidebar
  const toggleButtonRef = useRef(null); // Ref for the toggle button (optional)

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle the sidebar
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if sidebarRef and toggleButtonRef are defined and not null before checking .contains()
      if (
        sidebarRef.current && // Ensure sidebarRef is not null
        !sidebarRef.current.contains(event.target) && // Click is outside sidebar
        toggleButtonRef.current && // Ensure toggleButtonRef is not null
        !toggleButtonRef.current.contains(event.target) // Click is outside the toggle button
      ) {
        setIsSidebarOpen(false); // Close the sidebar
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="font-nunito text-sm z-50">
      <div className="dropdown lg:hidden items-center">
        <div
          ref={toggleButtonRef}
          tabIndex={0}
          role="button"
          className="btn btn-ghost sm:block lg:hidden dark:text-white "
          onClick={toggleSidebar}
        >
          <AlignJustify size={20} strokeWidth={2} className="" />
        </div>
      </div>
      <div
        ref={sidebarRef} // Attach the ref to the sidebar
        id="sidebar"
        className={`sidebar  fixed z-50  lg:static  bg-white dark:bg-[#141432] scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent p-2 space-y-3   md:h-screen   transition-all duration-700 ease-in-out 
             ${isSidebarOpen ? 'w-64 opacity-100 ' : 'w-0 opacity-0 hidden lg:block'}
             lg:w-64 lg:opacity-100`} // Always show on large screens (lg+)
        style={{ overflowY: 'auto', maxHeight: '100vh' }}
      >
        <div
          className={`space-y-4 text-[14px] transition-opacity  border-r-2 duration-600 ease-in-out`}
        >
          {/* font*/}
          <Link href="/home">
            {' '}
            <Image
              src={logo}
              width={150}
              height={300}
              alt="Repwoop POS Software"
              className="bg-transparent w-[60%] xl:w-[90%]"
            />
          </Link>
          {/* Dashboard, Owner, Bank Account  */}
          <div className="text-start ">
            <ul className="pt-2 space-y-4 text-gray-600 dark:text-white">
              {homePrimaryLinks.map(
                ({ href, label, icon, pathname: menuPath }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${
                        pathname === menuPath
                          ? 'group text-orange-500 flex items-center gap-3 hover:text-orange-500'
                          : 'group text-gray-500 dark:text-white hover:text-orange-500 flex items-center gap-3'
                      }`}
                    >
                      <span>{icon}</span>
                      <div>
                        <p>{label}</p>
                        <span className={spanClass}></span>
                      </div>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Sales & Purchase */}
          <div>
            <span className="uppercase text-sm text-gray-500 dark:text-white">
              Sales & Purchase
            </span>
            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
              {salesPurchaseLinks.map(({ href, label, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? ' group text-orange-500 flex items-center gap-3 hover:text-orange-500'
                        : 'group text-gray-500 dark:text-white hover:text-orange-500 flex items-center gap-3'
                    }`}
                  >
                    <span>{icon}</span>
                    <div>
                      <p>{label}</p>
                      <span className={spanClass}></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Information */}
          <div>
            <span className="uppercase text-sm text-gray-500 dark:text-white">
              Product Information
            </span>
            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
              {productLinks.map(({ href, label, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? ' group text-orange-500 flex items-center gap-3 hover:text-orange-500'
                        : 'group text-gray-500 dark:text-white hover:text-orange-500 flex items-center gap-3'
                    }`}
                  >
                    <span>{icon}</span>
                    <div>
                      <p>{label}</p>
                      <span className={spanClass}></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Expenses & Payments */}
          <div>
            <span className="uppercase text-sm text-gray-500 dark:text-white">
              Expenses & Payments
            </span>
            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
              {expensesLinks.map(({ href, label, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? ' group text-orange-500 flex items-center gap-3 hover:text-orange-500'
                        : 'group text-gray-500 dark:text-white hover:text-orange-500 flex items-center gap-3'
                    }`}
                  >
                    <span>{icon}</span>
                    <div>
                      <p>{label}</p>
                      <span className={spanClass}></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Promotion */}
          <div>
            <span className="uppercase text-sm text-gray-500 dark:text-white">
              Promotions
            </span>
            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
              <li>
                <Link
                  href="/Promotional-SMS"
                  className={`${
                    pathname === '/Promotional-SMS'
                      ? ' group text-orange-500 flex items-center gap-3 hover:text-orange-500'
                      : 'group text-gray-500 dark:text-white hover:text-orange-500 flex items-center gap-3'
                  }`}
                >
                  <span>
                    <MailPlus size={20} strokeWidth={1} />
                  </span>
                  <div>
                    <p>Promotional SMS</p>
                    <span className={spanClass}></span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            {/* Peoples */}
            <span className="uppercase text-sm text-gray-500 dark:text-white ">
              Peoples
            </span>
            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
              {peopleLinks.map(({ href, label, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? 'group text-orange-500 flex items-center gap-3 hover:text-orange-500'
                        : 'group text-gray-500 dark:text-white hover:text-orange-500 flex items-center gap-3'
                    }`}
                  >
                    <span>{icon}</span>
                    <div>
                      <p>{label}</p>
                      <span className={spanClass}></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reports */}
          <div>
            <span className="uppercase text-sm text-gray-500 dark:text-white">
              Reports
            </span>
            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
              {reportLinks.map(({ href, label, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`group flex items-center gap-3 ${
                      pathname === href
                        ? 'text-orange-500 hover:text-orange-500'
                        : 'text-gray-500 dark:text-white hover:text-orange-500'
                    }`}
                  >
                    <span>{icon}</span>
                    <div>
                      <p>{label}</p>
                      <span className={spanClass}></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Settings & Customize */}
          <div>
            <span className="uppercase text-sm text-gray-500 dark:text-white">
              Settings & Customize
            </span>
            <ul className="pt-2 space-y-4 text-gray-500 dark:text-white">
              {menuItems.map(({ name, href, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${
                      pathname === href
                        ? ' group text-orange-500 flex items-center gap-3 hover:text-orange-500'
                        : 'group text-gray-500 dark:text-white hover:text-orange-500 flex items-center gap-3'
                    }`}
                  >
                    <span>{icon}</span>
                    <div>
                      <p>{name}</p>
                      <span className={spanClass}></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Backup */}
          <div className="flex items-center gap-3 hover:text-orange-500  text-gray-500 dark:text-white ">
            <DatabaseBackup size={20} strokeWidth={1} />
            <span className="uppercase text-sm text-gray-500 dark:text-white hover:text-orange-500">
              Backup
            </span>
          </div>
          <div className="flex items-center gap-3 hover:text-orange-500  text-gray-500 dark:text-white pb-28 md:pb-8">
            <Building2 size={20} strokeWidth={1} />
            <span className="uppercase text-sm text-gray-500 dark:text-white hover:text-orange-500">
              Repwoop
            </span>
          </div>
        </div>
      </div>
      {/* <Outlet */}
      {/* <div className="flex-1 p-2 text-md "> */}
      {/* <Dashboard/> */}
      {/* </div> */}
    </div>
  );
}
