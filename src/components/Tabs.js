import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import close from '../assets/img/47.png';
import open from '../assets/img/46.png';
import useTab from '../hooks/useTabs';

function Tabs() {
  const [tabs, changeTabs] = useTab([
    'money',
    'security',
    'number',
    'duration',
  ]);
  return (
    <Wrapper>
      <Tab
        title="How do i get Paid?"
        Content={GetPaid}
        data={typeof tabs !== undefined ? tabs.money : false}
        page="money"
        changeTabs={changeTabs}
      />
      <Tab
        title="Are my source document safe secure?"
        Content={Security}
        data={typeof tabs !== undefined ? tabs.security : false}
        page="security"
        changeTabs={changeTabs}
      />
      <Tab
        title="Can I publish more than one book at once?"
        Content={MoreThanOneBook}
        data={typeof tabs !== undefined ? tabs.number : false}
        page="number"
        changeTabs={changeTabs}
      />
      <Tab
        title="How long does it take to publish?"
        Content={HowLong}
        data={typeof tabs !== undefined ? tabs.duration : false}
        page="duration"
        changeTabs={changeTabs}
      />
    </Wrapper>
  );
}

export const Tab = ({ title, Content, data, page, changeTabs }) => {
  return (
    <div className="tab">
      <div className="header">
        <h1>{title}</h1>
        {data ? (
          <img
            src={close}
            alt="close button png"
            onClick={() => changeTabs(page, false)}
          />
        ) : (
          <img
            src={open}
            alt="open button png"
            onClick={() => changeTabs(page, true)}
          />
        )}
      </div>
      {data ? (
        <div className="content">
          <Content />
        </div>
      ) : null}
    </div>
  );
};

const GetPaid = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit iusto
        nostrum corporis laborum voluptas adipisci expedita soluta earum illum.
      </p>
    </>
  );
};

const Security = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit iusto
        nostrum corporis laborum voluptas adipisci expedita soluta earum illum.
      </p>
    </>
  );
};

const MoreThanOneBook = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit iusto
        nostrum corporis laborum voluptas adipisci expedita soluta earum illum.
      </p>
    </>
  );
};
const HowLong = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit iusto
        nostrum corporis laborum voluptas adipisci expedita soluta earum illum.
      </p>
    </>
  );
};

const Wrapper = styled.section`
  .tab {
    padding: 2.5rem;
    border-bottom: 1px solid ${colors.tabBorder};
    .header {
      padding: 0 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-size: 1.1em;
      }
      img {
        cursor: pointer;
      }
    }
    .content {
      padding: 0 0.6rem;
      width: 70%;
      margin: 1rem 0;
    }
  }
`;

export default Tabs;
