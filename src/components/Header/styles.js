import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    margin: 0 auto;
    max-width: 1200px;
    font-family: var(--font-primary);

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 425px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    &.fixed-header { 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: aliceblue;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

`;

export const Headerr = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;      

    position: fixed;
    right: 0px;
    left: 0px;
    background: white;
    /* border-bottom: 1px solid; */
    z-index: 1;
    padding: 15px;

    box-shadow: 0px 2px 20px rgb(72 86 100 / 20%);


    @media (max-width: 999px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        top: 0;
    }

    @media (max-width: 930px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        top: 0;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        gap: 130px;
        margin-right: -75px;
        top: 0;
    }

    @media (min-width: 540px) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 52px;
        top: 0;
    }

    @media (max-width: 425px) {
        gap: 80px;
        display: flex;
        /* justify-content: center; */
        /* align-items: center; */
        margin-right: 0px;
        top: 0;
    }
    
    @media (max-width: 375px) {
        /* justify-content: center; */
        /* align-items: center; */
        gap: 40px;
        display: flex;
        margin-right: 0px;
        top: 0;
    }

    @media (max-width: 320px) {
        /* justify-content: center; */
        /* align-items: center; */
        gap: 30px;
        display: flex;
        margin-right: 0px;
        top: 0;
    }
`;

export const H1 = styled.h1`
    color: #000;
    font-size: 2rem;
    font-weight: 300;
    font-family: var(--font-primary);

    span {
        color: #F9A602;
    }

    @media (max-width: 320px) {
        font-size: 25px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;


    @media (max-width: 768px) {
    display: none;
  }

    @media (max-width: 930px) {
    display: none;
  }

    @media (max-width: 999px) {
    display: none;
  }
  

  @media (min-width: 2560px) {
    display: flex;
  }
`;

export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;

    li {
        margin: 0 15px;
        list-style-type: none;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        font-family: var(--font-secondary);
        font-size: 1rem;
        font-weight: 400;
        color: #3a4753b3;
        white-space: nowrap;
        transition: 0.3s;
        position: relative;
        text-decoration: none;
    }

    .nav-link {
        text-decoration: none;
        color: grey;
        padding-bottom: 5px;
        display: inline-block;
    }

    .nav-link.active {
        border-bottom: 2px solid #F9A602;
        color: black; /* opcional: para mudar a cor do texto do link ativo */
    }
`;