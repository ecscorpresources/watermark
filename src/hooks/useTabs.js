import React from 'react';

const useTab = ([...args]) => {
  const [tabs, setTabs] = React.useState({});

  const initTabs = (args) => {
    var obj = {};
    for (var i = 0; i <= args.length - 1; i++) {
      obj[args[i]] = false;
    }
    console.log(obj);
    setTabs(obj);
  };

  React.useEffect(() => {
    initTabs(args);
  }, []);

  var changeTabs = (tab, newValue) => {
    args.forEach((arg) => {
      if (arg === tab) {
        setTabs({ ...tabs, [arg]: newValue });
      } else return tabs;
    });
  };

  return [tabs, changeTabs];
};

export default useTab;
