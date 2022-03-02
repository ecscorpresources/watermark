import React from 'react';

const useActive = ([...args]) => {
  const [active, setActive] = React.useState({});

  const initActive = (args) => {
    var obj = {};
    for (var i = 0; i <= args.length - 1; i++) {
      if (i === 0) obj[args[i]] = true;
      else obj[args[i]] = false;
    }
    setActive(obj);
  };

  React.useEffect(() => {
    initActive(args);
  }, []);

  var changeActive = (page) => {
    let obj = {};
    args.forEach((arg) => {
      if (arg === page) {
        obj[arg] = true;
      } else obj[arg] = false;
    });
    setActive(obj);
  };

  return [active, changeActive];
};

export default useActive;
