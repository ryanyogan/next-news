import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2.8rem;
  line-height: 1.2;
  margin: 10px 0 20px;

  @media (max-width: 800px) {
    font-size: 1.8rem;
    margin: 15px 0;
  }
`;

export const Figure = styled.figure`
  padding: 35% 0 0;
  margin: 0 0 30px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const Card = styled.a`
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035), 0 4px 25px rgba(0, 0, 0, 0.07);
  color: black;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: black;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.035), 0 6px 35px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

export const Content = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  max-width: 800px;
`;

export const Meta = styled.footer`
  color: ${(p) => p.theme.colors.gray};

  & > * {
    margin-right: 0.3em;
  }
`;
