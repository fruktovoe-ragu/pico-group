import React from 'react';
import cnCreate from 'utils/cnCreate';
import useAppContext from 'hooks/useAppContext';
import SideMenu from 'components/SideMenu/SideMenu';
import Grid from 'components/Grid/Grid';
import GridColumn from 'components/Grid/GridColumn';
import ContentArea from 'components/ContentArea/ContentArea';
import MainHeader from 'components/MainHeader/MainHeader';
import { ICommonMenu } from 'content/menu';
import './Body.css';

export interface IBodyProps {
  submenu: ICommonMenu[];
  title: string;
  children: any;
}

const cn = cnCreate('body');
const Body: React.FC<IBodyProps> = ({
  title,
  submenu,
  children,
}) => {
  const { isMobileWide } = useAppContext();

  return (
    <div className={cn()}>
      <ContentArea>
        <Grid>
          <GridColumn leftOffsetDesktop="3">
            <MainHeader
              menu={submenu}
              title={title}
            />
          </GridColumn>
        </Grid>
        <Grid>
          {isMobileWide ? <></> : (
            <GridColumn desktop="3">
              <SideMenu menu={submenu} />
            </GridColumn>
          )}
          <GridColumn desktop="9" all="12">
            <div className={cn('inner')}>
                {/* <h2 className={cn('subtitle')}>{submenu[0].title}</h2> */}
                {children}
            </div>
          </GridColumn>
        </Grid>
      </ContentArea>
    </div>
  );
};

export default Body;
