import React from 'react';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import SideMenu from 'components/SideMenu/SideMenu';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import MainHeader from 'components/MainTitle/MainTitle';
import { ICommonMenu } from 'content/menu';
import './Body.css';

export interface IBodyProps {
  submenu: ICommonMenu[];
  title?: string;
  sideMenuReturnLink?: boolean;
  children: any;
}

const cn = cnCreate('body');
const Body: React.FC<IBodyProps> = ({
  title,
  submenu,
  sideMenuReturnLink,
  children,
}) => {
  const { isMobileWide } = useAppContext();

  return (
    <div className={cn()}>
      <ContentArea>
        <Grid>
          {isMobileWide ? <></> : (
            <GridColumn desktop="3">
              <SideMenu menu={submenu} hasBackItems={sideMenuReturnLink} />
            </GridColumn>
          )}
          <GridColumn desktop="9" all="12">
            {title &&
              <MainHeader
                menu={submenu}
                title={title}
              />
            }
            <div className={cn('inner')}>
                {children}
            </div>
          </GridColumn>
        </Grid>
      </ContentArea>
    </div>
  );
};

export default Body;
