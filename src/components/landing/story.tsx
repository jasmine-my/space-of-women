import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import Draggable, { DraggableData } from 'react-draggable';

import Icon from '~/components/icon/Icon';
import { font } from '~/global_styles/global';
import Jupiter from '~/images/planet-jupiter.svg';
import Mars from '~/images/planet-mars.svg';
import Saturn from '~/images/planet-saturn.svg';
import { mediaQueryTypes } from '~/types';

export default function Story({ isPC, isTablet, isMobile }: mediaQueryTypes) {
    const landingStoryStyle = css`
        background: url(${require('~/images/bg-gradient.svg').default}) center
            center no-repeat;
        background-size: cover;
        display: flex;
        justify-content: ${isPC ? 'flex-end' : 'flex-start'};
        align-items: center;
        padding: ${isPC ? '187px 20%' : isTablet ? '187px 81px' : '69px 47px'};
        position: relative;

        .planet {
            position: absolute;
            cursor: pointer;
            border-radius: 50%;
            z-index: 1;
            &.saturn {
                left: ${isPC ? '8%' : isTablet ? '-40%' : '-100%'};
                background: url(${require('~/images/planet-saturn.svg')
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
                background: url(${require('~/images/planet-jupiter.svg')
                        .default})
                    no-repeat center center;
                background-size: contain;
                width: 740px;
                height: 740px;
            }

            &.mars {
                right: 5%;
                bottom: ${isPC ? '25%' : isTablet ? '20%' : '100%'};
                background: url(${require('~/images/planet-mars.svg').default})
                    no-repeat center center;
                background-size: contain;
                width: 300px;
                height: 300px;
            }
        }

        .text {
            z-index: 1;
            text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 2;

            .title {
                ${isMobile
                    ? font('Inter', 700, 48, 58.09, 'var(--BASIC-WHITE)')
                    : font('Inter', 700, 65, 78.66, 'var(--BASIC-WHITE)')};
                margin-bottom: ${isMobile ? '36px' : '80px'};
                text-align: ${isMobile ? 'center' : 'left'};
            }

            .description {
                ${font('Noto', 400, 16, 36, 'var(--BASIC-WHITE)')}
                .bold {
                    ${font('Noto', 700, 16, 36, 'var(--BASIC-WHITE)')}
                }
            }

            .list {
                ${font('Noto', 600, 20, 38, 'var(--BASIC-WHITE)')}
                .checkIcon {
                }
            }
        }
    `;

    const nodeRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [position2, setPosition2] = useState({ x: 50, y: 50 });

    const trackPos = (data: DraggableData) => {
        setPosition({ x: data.x, y: data.y });
    };

    const trackPos2 = (data: { x: any; y: any }) => {
        setPosition2({ x: data.x, y: data.y });
    };

    return (
        <div css={landingStoryStyle}>
            <Draggable nodeRef={nodeRef} onDrag={(e, data) => trackPos(data)}>
                <div ref={nodeRef} className={'planet saturn'}>
                    {/*<img src={Saturn} alt="planet-image-saturn" width={492} />*/}
                </div>
            </Draggable>
            <Draggable nodeRef={nodeRef} onDrag={(e, data) => trackPos(data)}>
                <div ref={nodeRef} className={'planet jupiter'}>
                    {/*<img src={Saturn} alt="planet-image-saturn" width={492} />*/}
                </div>
            </Draggable>
            <Draggable nodeRef={nodeRef} onDrag={(e, data) => trackPos(data)}>
                <div ref={nodeRef} className={'planet mars'}>
                    {/*<img src={Saturn} alt="planet-image-saturn" width={492} />*/}
                </div>
            </Draggable>
            {/*<img*/}
            {/*    src={Jupiter}*/}
            {/*    className={'planet jupiter'}*/}
            {/*    alt="planet-image-jupiter"*/}
            {/*    width={747}*/}
            {/*/>*/}
            {/*<img*/}
            {/*    src={Mars}*/}
            {/*    className={'planet mars'}*/}
            {/*    alt="planet-image-mars"*/}
            {/*    width={310}*/}
            {/*/>*/}
            <div className={'text'}>
                <p className={'title'}>SOW Story</p>
                <p className={'description'}>
                    안녕하세요, SOW 연구소입니다. <br />
                    <span className={'bold'}>
                        Web3 세계에서 활동하는 여성 창작자가 매우 적다는
                        연구결과가 있었습니다.
                    </span>{' '}
                    <br />
                    잠재력 있는 여성 창작자들이 Web3에서 빛을 발하지 못하고 있던
                    것이죠. <br />
                    <span className={'bold'}>
                        그래서 저희는 Web3 우주공간 ‘SPACE OF WOMEN’을
                        마련했습니다!
                    </span>
                    <br />
                    이곳은 상상이 현실이 되는 곳입니다. 다양한 창작물이 모여
                    확장되고 운영되는 공간이에요.
                    <br /> 여러분이 만들어 갈 우주의 모습을 기대하며, 몇 가지
                    규칙을 알려드리겠습니다.
                    <br /> 이 공간을 만드는 여정에 함께해주시겠어요?
                    <br />{' '}
                    <span className={'bold'}>
                        여성 창작자와 함께하고 싶은 분이라면 누구든 환영합니다!
                    </span>
                </p>
                <ul className={'list'}>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={24}
                            className={'checkIcon'}
                        />{' '}
                        각 행성에는 미션이 존재한다.
                    </li>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={24}
                            className={'checkIcon'}
                        />{' '}
                        누구나 창작을 통해 미션에 참여할 수 있다.
                    </li>
                    <li>
                        <Icon
                            name={'icon-check-pink'}
                            size={24}
                            className={'checkIcon'}
                        />{' '}
                        미션 수행 결과는 공간에 실제로 반영된다.
                    </li>
                </ul>
                <p className={'description'}>
                    이 공간을 만드는 여정에 함께해주시겠어요? <br />
                    여성 창작자와 함께하고 싶은 분이라면 누구든 환영합니다!
                </p>
            </div>
        </div>
    );
}
