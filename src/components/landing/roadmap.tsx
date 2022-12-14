import { css } from '@emotion/react';
import React, { MutableRefObject, useRef } from 'react';

import Card from '~/components/card';
import CheckItem from '~/components/checkItem';
import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function RoadMap({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingRoadmapStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        .cards {
            display: grid;
            grid-template-columns: repeat(${isPC ? '3' : '1'}, 1fr);
            grid-template-rows: repeat(${isPC ? '1' : '3'}, auto);
            gap: 18px;
            min-width: ${isPC ? '1000px' : '100%'};
            margin: 0 auto;
            height: 100%;
            position: relative;
            z-index: 10;
        }
        position: relative;
        .planet {
            position: absolute;
            z-index: 0;
            &.moon {
                top: ${isMobile ? '-400px' : '-490px'};
                left: ${isPC ? '-1000px' : isTablet ? '-1100px' : '-1200px'};
                background: url(${require('~/images/planet/planet-moon.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 1877px;
                height: 1055px;
            }
        }
    `;

    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { isShow } = useOffsetTop(ref.current?.offsetTop);

    return (
        <div css={landingRoadmapStyle} ref={ref}>
            <div className={'planet moon'} />
            <div className={`wrap ${isShow ? 'opacity' : ''}`}>
                <p className={'title'}>RoadMap</p>
                <div className={'cards'}>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>For Mission</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'pink'}>
                                    1??? ????????? 30%, 50% ?????? ??? ??????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    ?????? ????????? 5% ?????? ???????????? ?????? ??????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    ?????? ????????? 10% ???????????? ??? ?????? ??????{' '}
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>For Holders</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'pink'}>
                                    SOW ?????? ???????????? ?????????!
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    ??????????????? ?????? NFT ?????????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    ????????? ?????? ?????? ????????????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    ?????? ???????????? ?????????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    SOW citizens ???????????? ???????????? ??????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    ?????? ???????????? ?????? ????????? ??????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    ?????? ???????????? ?????? ?????????!
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                    <Card isMobile={isMobile}>
                        <div>
                            <p className={'cardTitle'}>For Brand</p>
                            <div className={'checkItems'}>
                                <CheckItem color={'pink'}>
                                    SOW special Film ??????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    SOW special Novel ??????
                                </CheckItem>
                                <CheckItem color={'pink'}>
                                    ?????? ???????????? ???????????? ??????
                                </CheckItem>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
