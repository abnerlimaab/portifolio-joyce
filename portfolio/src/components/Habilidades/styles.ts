import styled from "styled-components";

export const Container = styled.span`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    font-size: 1.125rem;
    font-weight: 400;
`;

export const TagInitial = styled.p`
    margin-right: 26px;
    `;

export const TagNext = styled.p`
    margin-right: 26px;

    ::before {
      content: "/";
      margin-right: 26px;
    }
`;
