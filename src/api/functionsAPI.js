import firebase from './index';

export const makeLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .database()
          .ref('users')
          .on('value', (snapshot) => {
            let users = {};

            const { uid } = firebase.auth().currentUser;

            snapshot.forEach((childItem) => {
              if (childItem.key === uid) {
                users = {
                  nomeCompleto: childItem.val().nomeCompleto,
                  CNPJ: childItem.val().CNPJ,
                };
              }
            });

            const resolveProps = { logado: true, users };

            resolve(resolveProps);
          });
      })
      .catch((error) => {
        const rejectProps = { logado: false, error };
        reject(rejectProps);
      });
  });
};

export const makeSignUp = (email, password, CNPJ, nomeCompleto) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const resolveProps = { logado: true };

        const { uid } = firebase.auth().currentUser;

        firebase.database().ref('users').child(uid).set({
          nomeCompleto,
          CNPJ,
        });

        resolve(resolveProps);
      })
      .catch((error) => {
        const rejectProps = { logado: false, error };
        reject(rejectProps);
      });
  });
};

export const makeSendEmail = (email) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        const resolveProps = true;
        resolve(resolveProps);
      })
      .catch((error) => {
        const rejectProps = { error };
        reject(rejectProps);
      });
  });
};

export const checkCollectPoints = () => {
  return new Promise((resolve) => {
    const checkCollectList = [];

    firebase
      .database()
      .ref('places')
      .on('value', (snapshot) => {
        snapshot.forEach((items) => {
          checkCollectList.push({
            id: items.val().id,
            place: items.val().place,
            street: items.val().street,
            number: items.val().number,
            week: items.val().week,
            rua: items.val().rua,
            linkDetails: items.val().linkDetails,
            details: items.val().Details,
            df: items.val().df,
            whatsapp: items.val().whatsapp,
            clicktochat: items.val().clicktochat,
            backgroundColor: items.val().backgroundColor,
            buttonbackGroundColor: items.val().buttonbackGroundColor,
          });
        });
      });
    resolve(checkCollectList);
  });
};
