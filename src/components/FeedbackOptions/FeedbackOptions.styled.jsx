import styled from '@emotion/styled'

export const BtnDiv = styled.div`
display: flex;
`;

export const Btn = styled.button`
text-transform: capitalize;
padding: 5px;
background-color: transparent;
border: 1px solid #fbfbfb5f;
border-radius: 4px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
cursor: pointer;
min-width: 80px;
font-weight: 400;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.02em;
text-align: center;
margin-left: auto;
margin-right: auto;

&:hover {
    background-color: #0a95da94;;;
  }
`;
