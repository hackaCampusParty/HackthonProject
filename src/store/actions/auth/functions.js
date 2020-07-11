import {
  makeLogin,
  makeSignUp,
  makeSendEmail,
} from '../../../api/functionsAPI';

export const doLogin = (
  setLogado,
  email,
  password,
  notification,
  setNomeCompleto,
  setCNPJ
) => {
  makeLogin(email, password)
    .then((resolveProps) => {
      notification.alertWithType('success', 'Sucesso', 'Usuário logado');
      setNomeCompleto(resolveProps.users.nomeCompleto);
      setCNPJ(resolveProps.users.CNPJ);
      setLogado(resolveProps.logado);
    })
    .catch((rejectProps) => {
      setLogado(rejectProps.logado);
      switch (rejectProps.error.code) {
        case 'auth/user-disabled':
          notification.alertWithType(
            'error',
            'Erro',
            'Seu usuário está desativado'
          );

          break;
        case 'auth/user-not-found':
          notification.alertWithType(
            'error',
            'Erro',
            'Usuário não foi encontrado'
          );

          break;
        case 'auth/wrong-password':
          notification.alertWithType(
            'error',
            'Erro',
            'E-mail e/ou senha incorretos!'
          );

          break;
        default:
          notification.alertWithType(
            'error',
            'Erro',
            rejectProps.error.message
          );

          break;
      }
    });
};

export const doSignUp = (
  setLogado,
  email,
  password,
  CNPJ,
  nomeCompleto,
  notification
) => {
  makeSignUp(email, password, CNPJ, nomeCompleto)
    .then((resolveProps) => {
      notification.alertWithType(
        'success',
        'Sucesso',
        'Usuário Cadastrado com sucesso'
      );
      setLogado(resolveProps.logado);
    })
    .catch((rejectProps) => {
      switch (rejectProps.error.code) {
        case 'auth/email-already-in-use':
          notification.alertWithType('error', 'Erro', 'E-mail já utilizado!');
          break;
        case 'auth/invalid-email':
          notification.alertWithType('error', 'Erro', 'E-mail inválido!');
          break;
        case 'auth/operation-not-allowed':
          notification.alertWithType(
            'error',
            'Erro',
            'Tente novamente mais tarde!'
          );
          break;
        case 'auth/weak-password':
          notification.alertWithType(
            'error',
            'Erro',
            'A senha deve ter mais que 6 digitos'
          );
          break;
        default:
          notification.alertWithType(
            'error',
            'Erro',
            rejectProps.error.message
          );
          break;
      }
    });
};

export const doRecoveryForgotPassword = (email, navigate, notification) => {
  makeSendEmail(email)
    .then((resolveProps) => {
      if (resolveProps) {
        navigate('LoginScreen');
      }
    })
    .catch((rejectProps) => {
      switch (rejectProps.error.code) {
        case 'auth/user-not-found':
          notification.alertWithType('error', 'Erro', 'Usuário não encontrado');
          break;

        case 'auth/too-many-requests':
          notification.alertWithType(
            'error',
            'Erro',
            'Se tentou mais de duas vezes redefinir a senha com o mesmo e-mail, tente novamente mais tarde'
          );

          break;
        default:
          notification.alertWithType('error', 'Erro', rejectProps.error.code);
          break;
      }
    });
};
