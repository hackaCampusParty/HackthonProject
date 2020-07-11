import { checkCollectPoints } from '../../../api/functionsAPI';

export const getCollectPointsList = (setPointsCollect) => {
  checkCollectPoints().then((resolveProps) => {
    setPointsCollect(resolveProps);
  });
};
