import React from 'react';
import OriginalNavBarItem from '@theme-original/NavbarItem';
import { useLocation }  from '@docusaurus/router';

export default function NavbarItem(props) {
  const { docsPluginId, type } = props
  const { pathname } = useLocation()

  if (type === 'docsVersionDropdown'){
    const paths = pathname.split('/')
    if(paths[1]==='cloud') {
    return null
    }
  }

  return (
    <>
      <OriginalNavBarItem {...props} />
    </>
  );
}