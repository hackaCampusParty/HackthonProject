import { checkCollectPoints } from '../../../api/functionsAPI';

export const getCollectPointsList = (setCollectPointsList) => {
  checkCollectPoints().then((resolveProps) => {
    setCollectPointsList(resolveProps);
  });
};
