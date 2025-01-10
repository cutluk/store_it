import React from 'react';
import Image from 'next/image';
import { Button } from 'components/ui/button';
import Search from 'components/Search';
import FileUploader from 'components/FileUploader';
import { signOutUser } from 'lib/actions/user.actions';

const Header = () => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader />
        <form
          action={async () => {
            'use server';
            await signOutUser();
          }}
        >
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
