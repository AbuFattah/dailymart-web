"use client";

import React, { createRef, FC, useState } from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "@/shared/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "@/shared/Navigation/Navigation";
import CartDropdown from "./CartDropdown";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export interface TopBar {}

const TopBar: FC<TopBar> = () => {
  const inputRef = createRef<HTMLInputElement>();
  const router = useRouter();

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        className="flex-1 py-3 text-slate-900 dark:text-slate-100"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/search");
          inputRef.current?.blur();
        }}
      >
        <div className="bg-slate-50 border border-slate-300 focus-within:border-primary-500 focus-within:border-2 dark:bg-slate-800 flex items-center space-x-1.5 px-5 h-full rounded">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products"
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-sm"
            autoFocus
          />
          <button
            title="search"
            type="button"
            // onClick={() => setShowSearchForm(false)}
          >
            {renderMagnifyingGlassIcon()}
          </button>
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  const renderContent = () => {
    return (
      <div className="h-16 flex justify-between">
        <div className="flex items-center lg:hidden flex-1">
          <MenuBar />
        </div>

        <div className="lg:flex-1 flex items-center">
          <Logo className="flex-shrink-0" />
        </div>

        <div className="flex-[2] hidden lg:flex justify-center mx-4">
          {renderSearchForm()}
        </div>

        <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
          <AvatarDropdown />
          <CartDropdown />
        </div>
      </div>
    );
  };

  return (
    <div className="nc-MainNav2Logged relative z-50 shod bg-white dark:bg-neutral-900  dark:border-slate-700">
      <div className="container ">{renderContent()}</div>
    </div>
  );
};

export default TopBar;
