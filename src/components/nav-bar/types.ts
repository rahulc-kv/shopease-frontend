import React from 'react';

export type NavBarProps = {
  navBarItems: NavBarItemType[];
  title?: JSX.Element;
};

type NavBarItemType = {
  cta: string;
  icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  path: string;
};
