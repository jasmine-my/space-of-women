import { css } from '@emotion/react';
import React, { MutableRefObject, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';

import Icon from '~/components/icon/Icon';
import landingSectionStyle from '~/components/landing/landingsectionStyle';
import { font } from '~/global_styles/global';
import background from '~/images/bg-gradient.png';
import { mediaQueryTypes } from '~/types';
import { useOffsetTop } from '~/useHooks/useScroll';

export default function Story({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingStoryStyle = css`
        ${landingSectionStyle(isMobile, isTablet)};
        background: url(${background}) var(--SOW-BLUE) center center no-repeat;
        background-size: cover;
        position: relative;
        .planet {
            position: absolute;
            cursor: pointer;
            border-radius: 50%;
            z-index: 1;
            display: inline-block;
            transition: all 0.3s;
            &.saturn {
                left: ${isPC ? '8%' : isTablet ? '-40%' : '-100%'};
                background: url(${require('~/images/planet/planet-saturn.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 500px;
                height: 500px;
                border-radius: 0;
            }
            &.jupiter {
                right: ${isPC ? '0' : isTablet ? '-50%' : '100%'};
                top: -50px;
                background: url(${require('~/images/planet/planet-jupiter.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 740px;
                height: 740px;
            }
            &.mars {
                right: ${isMobile ? '100%' : '5%'};
                bottom: ${isPC ? '10%' : isTablet ? '20%' : '0'};
                background: url(${require('~/images/planet/planet-mars.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 300px;
                height: 300px;
            }
            &.toRight {
                animation: toRight 1.5s 0.3s cubic-bezier(0.5, 0, 0.1, 1)
                    forwards;
                -webkit-animation: webkit-toRight 1.5s
                    cubic-bezier(0.5, 0, 0.1, 1) forwards;
            }
            &.toLeft {
                animation: toLeft 1.5 0.3s cubic-bezier(0.5, 0, 0.1, 1) forwards;
                -webkit-animation: webkit-toLeft 1.5s
                    cubic-bezier(0.5, 0, 0.1, 1) forwards;
            }

            @keyframes toRight {
                from {
                    transform: translateX(-60%);
                }
                to {
                    transform: translateX(0);
                }
            }
            @keyframes webkit-toRight {
                from {
                    -webkit-transform: translateX(-60%);
                }
                to {
                    -webkit-transform: translateX(0);
                }
            }
            @keyframes toLeft {
                from {
                    opacity: 0;
                    transform: translateX(60%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes webkit-toLeft {
                from {
                    -webkit-transform: translateX(60%);
                }
                to {
                    -webkit-transform: translateX(0);
                }
            }
        }
        .text {
            text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;

            .description {
                ${font('Noto', 400, 16, 36, 'var(--BASIC-WHITE)')}
                .bold {
                    ${font('Noto', 700, 16, 36, 'var(--BASIC-WHITE)')};
                }
            }
            .checkList {
                z-index: 2;
                margin: ${isMobile ? '24px 0' : '48px 0'};
                ${isMobile
                    ? font('Noto', 600, 16, 38, 'var(--BASIC-WHITE)')
                    : font('Noto', 600, 20, 38, 'var(--BASIC-WHITE)')};
                li {
                    display: grid;
                    grid-template-columns: repeat(
                        2,
                        ${isMobile ? '14px' : '21px'} auto
                    );
                    justify-content: start;
                    align-items: center;
                    gap: ${isMobile ? '5px' : '13.5px'};
                }
            }
        }
        .wrap {
            width: ${isMobile ? '360px' : isTablet ? '60%' : '700px'};
            min-width: ${!isMobile && !isTablet ? '700px' : 'auto'};
        }
    `;

    const nodeRef = useRef(null);
    useEffect(() => {}, []);

    const ref = useRef() as MutableRefObject<HTMLDivElement | null>;
    const { isShow } = useOffsetTop(ref.current?.offsetTop);

    return (
        <div css={landingStoryStyle} ref={ref}>
            <div className={`text wrap ${isShow ? 'opacity' : ''}`}>
                <p className={'title'}>SOW Story</p>
                <div className={'description breakInMobileText'}>
                    ???????????????, SOW ??????????????????.
                    <br />
                    <span className={'bold'}>
                        Web3 ???????????? ???????????? ?????? ???????????? ?????? ?????????
                        ??????????????? ???????????????.{' '}
                    </span>
                    {isPC && <br />}
                    ????????? ?????? ?????? ??????????????? Web3?????? ?????? ????????? ????????? ??????
                    ?????????.
                    <br />
                    {(isTablet || isMobile) && <br />}
                    <p className={'bold'}>
                        ????????? ????????? Web3 ????????????{' '}
                        <span>???SPACE OF WOMEN?????? ??????????????????!</span>
                    </p>
                    <p>
                        ????????? ????????? ????????? ?????? ????????????.{' '}
                        <span>
                            ????????? ???????????? ?????? ???????????? ???????????? ???????????????.
                        </span>
                    </p>
                    <p>
                        <span>???????????? ????????? ??? ????????? ????????? ????????????, </span>
                        <span>??? ?????? ????????? ????????????????????????.</span>
                    </p>
                </div>
                <ul className={'checkList'}>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={isMobile ? 14 : 21}
                            className={'checkIcon'}
                        />{' '}
                        ??? ???????????? ????????? ????????????.
                    </li>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={isMobile ? 14 : 21}
                            className={'checkIcon'}
                        />{' '}
                        ????????? ????????? ?????? ????????? ????????? ??? ??????.
                    </li>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={isMobile ? 14 : 21}
                            className={'checkIcon'}
                        />{' '}
                        ?????? ?????? ????????? ????????? ????????? ????????????.
                    </li>
                </ul>
                <div className={'description breakInMobileText'}>
                    <p className={'bold'}>
                        ??? ????????? ????????? ????????? ?????????????????????????
                        <br /> ?????? ???????????? ???????????? ?????? ????????????{' '}
                        <span>????????? ???????????????!</span>
                    </p>
                </div>
            </div>
            <Draggable nodeRef={nodeRef} defaultClassName={'planets'}>
                <div
                    ref={nodeRef}
                    className={`planet saturn ${
                        isShow && isPC ? 'toRight' : ''
                    }`}
                />
            </Draggable>
            <Draggable nodeRef={nodeRef}>
                <div
                    ref={nodeRef}
                    className={`planet jupiter ${
                        isShow && isPC ? 'toLeft' : ''
                    }`}
                />
            </Draggable>
            <Draggable nodeRef={nodeRef}>
                <div
                    ref={nodeRef}
                    className={`planet mars  ${isShow && isPC ? 'toLeft' : ''}`}
                />
            </Draggable>
        </div>
    );
}
