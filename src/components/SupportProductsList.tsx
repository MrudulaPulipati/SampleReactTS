import { IImageProps, Image, ImageFit, Link } from '@fluentui/react';
import { FocusZone, FocusZoneDirection } from '@fluentui/react/lib/FocusZone';
import { List } from '@fluentui/react/lib/List';
import { getTheme, ITheme, mergeStyleSets } from '@fluentui/react/lib/Styling';
import { IRectangle } from '@fluentui/react/lib/Utilities';
import React, { Component } from 'react';
import { SupportedProductData } from '../data/DataFile';

const theme: ITheme = getTheme();
const { palette, fonts } = theme;
const ROWS_PER_PAGE = 20;
const classNames = mergeStyleSets({
    listBg: {
        backgroundColor: palette.white,
        boxShadow: '0 1.6px 3.6px 0 #00000021, 0 0.3px 0.9px 0 #00000021',
        height: '100%',
        textDecoration: 'none',
        margin: 0,
        position: 'relative',
        selectors: {
            ':hover': {
                boxShadow: '0 6.4px 14.4px 0 rgba(0,0,0,0.13),0 1.2px 3.6px 0 rgba(0,0,0,0.11)',
                transition: 'all .3s cubic-bezier(.8,0,.2,1)'
            }
        }
    },
    listGridBox: {
        display: 'flex',
        margin: '-.75rem -.75rem 0',
        flexDirection: 'column',

        ':global(.ms-List-page)': {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '-.75rem'
        },
        ':global(.ms-List-cell)': {
            width: 'calc( 100% / 4.4)',
            padding: '.75rem',
            flex: 'none',
            display: 'block'
        },
    },
    listGridBoxPadder: {
        padding: '1.5rem',
        backgroundColor: '#fff',
        inset: '10px'
    },
    innerLinkTitle: [
        fonts.large,
        {
            fontWeight: 600,
            ':global(a::before)': {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1,
                content: "''",
            }
        },
    ],
    list_box: {
        color: '#000',
        selectors: {
            ':hover': {
                textDecoration: 'none',
                color: '#000'
            }
        }
    },
    itemDescription: {
        fontSize: '0.875rem',
        lineHeight: '1.3',
        margin: 0,
        wordWrap: 'break-word',
        color: '#505050'
    },
    prduct_container_wdth: {
        maxWidth: 'calc(100% - 10vw)',
        width: 'calc(100% - 10vw)',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3rem 0'
    },
    product_heading: {
        paddingLeft: '1.875rem',
        margin: '0 0 1.5rem -1.875rem',
        fontSize: '2.125rem',
        fontWeight: 600
    }
});
const imageProps: IImageProps = {
    maximizeFrame: true,
    imageFit: ImageFit.centerCover,
    width: 60,
    height: 60,
};
export default class SupportProductsList extends Component {

    items = SupportedProductData;

    getItemCountForPage(itemIndex: number | undefined, surfaceRect: IRectangle | undefined) {
        return ROWS_PER_PAGE;
    };

    onRenderCell(item: any, index: number | undefined) {
        return (
            <div className={classNames.listBg}>
                <div className={classNames.listGridBoxPadder}>
                    <Image {...imageProps} style={{ marginBottom: '.5rem' }}
                        src={require("../images/" + item.imagePath).default} alt={item.imagePath} />
                    <div>
                        <Link key={2 + '_link'} className={`${classNames.innerLinkTitle}`} href={item.url}
                        >{item.title}</Link>
                        <div className={classNames.itemDescription}>{item.header}</div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div className={classNames.prduct_container_wdth}>
                <h2 className={classNames.product_heading}>Supported products</h2>
                <FocusZone className={classNames.listGridBox} direction={FocusZoneDirection.horizontal}>
                    <List items={this.items} onRenderCell={this.onRenderCell}
                        getItemCountForPage={this.getItemCountForPage} />
                </FocusZone>
            </div>
        );
    }
};