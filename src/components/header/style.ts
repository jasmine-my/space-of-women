import { css } from '@emotion/react';

import { font, headerHeight, mobileHeaderHeight } from '~/global_styles/global';

export const headerStyle = (
    isOpenedMenu: boolean,
    isTablet: boolean,
    isMobile: boolean
) => css`
    z-index: 3;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    transition: all 0.3s;
    .scrollDown {
        animation: scrollDown 0.5s cubic-bezier(0.5, 0, 0.1, 1) forwards;
        -webkit-animation: webkit-scrollDown 0.5s cubic-bezier(0.5, 0, 0.1, 1)
            forwards;
    }
    .scrollUp {
        animation: scrollUp 0.5s cubic-bezier(0.5, 0, 0.1, 1) forwards;
        -webkit-animation: webkit-scrollUp 0.5s cubic-bezier(0.5, 0, 0.1, 1)
            forwards;
    }
    @keyframes scrollDown {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translateY(-100%);
        }
    }
    @-webkit-keyframes webkit-scrollDown {
        from {
            -webkit-filter: opacity(1);
        }
        to {
            -webkit-filter: opacity(0);
            -webkit-transform: translateY(-100%);
        }
    }
    @keyframes scrollUp {
        from {
            opacity: 0;
            transform: translateY(-100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @-webkit-keyframes webkit-scrollUp {
        from {
            -webkit-filter: opacity(0);
            -webkit-transform: translateY(-100%);
        }
        to {
            -webkit-filter: opacity(1);
            -webkit-transform: translateY(0);
        }
    }

    .wrap {
        background-color: var(--BASIC-WHITE);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        margin: 0 auto;
        min-height: ${isMobile ? mobileHeaderHeight : headerHeight};
        padding: ${isTablet || isMobile ? '0 16px' : '0 20px'};
    }

    .top {
        opacity: 1;
        transform: translateY(0);
    }

    .logo {
        width: ${isMobile ? '60%' : '60%'};
        cursor: pointer;
    }
    .contents {
        display: flex;
        align-items: center;
        gap: 63px;
    }
    .gnbItems {
        display: flex;
        gap: 64px;
        ${font(
            'Inter',
            700,
            18,
            21.78,
            `${
                isTablet || isMobile
                    ? 'var(--BASIC-WHITE)'
                    : 'var(--BASIC-NAVY)'
            }`
        )};
        li {
            :is(:hover, :active) {
                cursor: pointer;
                color: var(--SOW-GREEN);
                transition: color 0.2s ease-in-out;
            }
        }
        &.small {
            z-index: 100;
            background: var(--SOW-PURPLE);
            padding: 61px 0 61px 55px;
            flex-direction: column;
        }
    }
`;

export const snsIconStyle = css`
    display: flex;
    gap: 10px;
    li {
        cursor: pointer;
    }
`;
