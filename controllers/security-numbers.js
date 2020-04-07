/* eslint-disable newline-per-chained-call */
const stateNumbers = [
  {
    state: 'abia',
    phones: ['08079210003', '08079210004', '08079210005']
  },
  {
    state: 'adamawa',
    phones: ['08089671313']
  },
  {
    state: 'akwa-ibom',
    phones: ['08039213071', '08020913810']
  },
  {
    state: 'anambra',
    phones: ['07039194332', '08024922772', '08075390511', '08182951257']
  },
  {
    state: 'bauchi',
    phones: ['08151849417', '08127162434', '08084763669', '08073794920']
  },
  {
    state: 'bayelsa',
    phones: ['07034578208']
  },
  {
    state: 'benue',
    phones: ['08066006475', '08053039936', '07075390977']
  },
  {
    state: 'borno',
    phones: ['08068075581', '08036071667', '08123823322']
  },
  {
    state: 'cross-river',
    phones: ['08133568456', '07053355415']
  },
  {
    state: 'delta',
    phones: ['08036684974']
  },
  {
    state: 'ebonyi',
    phones: ['08068075581', '08036971667', '08123823322']
  },
  {
    state: 'edo',
    phones: ['08037646272', '08077773721', '08067551618']
  },
  {
    state: 'ekiti',
    phones: ['08062335577', '07089310359']
  },
  {
    state: 'enugu',
    phones: ['08032003702', '08075390883', '08086671202']
  },
  {
    state: 'gombe',
    phones: ['08150567771', '08151855014']
  },
  {
    state: 'imo',
    phones: ['08034773600', '08037037283']
  },
  {
    state: 'jigawa',
    phones: ['08075391069', '07089846285', '08123821598']
  },
  {
    state: 'kaduna',
    phones: ['08123822284']
  },
  {
    state: 'kano',
    phones: ['08032419754', '08123821575', '08064977004', '08064977005']
  },
  {
    state: 'katsina',
    phones: ['08075391255', '08075391250']
  },
  {
    state: 'kebbi',
    phones: ['08038797644', '08075391307']
  },
  {
    state: 'kogi',
    phones: ['08075391335', '07038329084']
  },
  {
    state: 'kwara',
    phones: ['07032069501', '08125275046']
  },
  {
    state: 'lagos',
    phones: ['07055462708', '08035963919']
  },
  {
    state: 'nassarawa',
    phones: ['08123821571']
  },
  {
    state: 'niger',
    phones: ['08081777498']
  },
  {
    state: 'ogun',
    phones: ['08032136765', '08081770416']
  },
  {
    state: 'ondo',
    phones: ['07034313903', '08075391808']
  },
  {
    state: 'osun',
    phones: ['08075872433', '08039537995', '08123823981']
  },
  {
    state: 'oyo',
    phones: ['08081768614', '08150777888']
  },
  {
    state: 'plateau',
    phones: ['08126375938', '08075391844', '08038907662']
  },
  {
    state: 'rivers',
    phones: ['08032003514', '08073777717']
  },
  {
    state: 'sokoto',
    phones: ['07068848035', '08075391943']
  },
  {
    state: 'taraba',
    phones: ['08140089863', '08073260267']
  },
  {
    state: 'yobe',
    phones: ['07039301585', '08035067570']
  },
  {
    state: 'zamfara',
    phones: ['08106580123']
  },
  {
    state: 'FCT (Abuja)',
    phones: ['07057337653', '08061581938', '08032003913']
  }
];

exports.getNumbers = async (req, res, next) => {
  const { text } = req.body;
  try {
    let response = '';

    const getAllStateNames = () => {
      return stateNumbers
        .map(
          ({ state }, idx) => `${idx + 1}. ${state}
      `
        )
        .join('')
        .replace(/,/g, '');
    };

    const getSpecificStateNumbers = () => {
      return stateNumbers[text].phones
        .map(
          (number) => `${number}
        `
        )
        .join('')
        .replace(/,/g, '');
    };

    if (text === '') {
      response = `CON Get security numbers across Nigeria. Choose state below?
      ${getAllStateNames()}`;
    } else {
      response = `END Below are the security numbers at ${
        stateNumbers[text].state
      };
      ${getSpecificStateNumbers()}`;
    }

    res.header('Content-type: text/plain').status(200).send(response);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
