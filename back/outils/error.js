export class CustomError {
    constructor(message = 'Message:', statusCode = 500, description) {
      this.name = this.constructor.name;
      this.message = message;
      this.statusCode = statusCode;
      this.description = description;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  /**
   * @swagger
   *
   *   responses:
   *     BadRequest:
   *       description: Cannot process the request may a malformed syntax request, invalid message framing, or deceptive request routing.
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Error'
   */
  export class PasDeToken extends CustomError {
    constructor(description, errors) {
      super('Pas de token trouvé',400,description);
      this.errors = errors;
    }
  }
  
  /**
   * @swagger
   *
   *   responses:
   *     Unauthorized:
   *       description: The request has not been applied because it lacks valid authentication credentials for the target resource.
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Error'
   */
  export class Unauthorized extends CustomError {
    constructor(description) {
      super(
        'Unauthorized Access. Authentication required or invalid.',
        401,
        description
      );
    }
  }
  
  export class UtilisteurExist extends CustomError {
    constructor(description) {
      super('Utilisateur existe deja.', 402, description);
    }
  }
  
  /**
   * @swagger
   *
   *   responses:
   *     PasdUtilisteur:
   *       description: liste vide pas dutilisateur.
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Error'
   */
  export class PasdUtilisteur extends CustomError {
    constructor(description) {
      super(
        'liste vide pas dutilisateur.',
        403,
        description
      );
    }
  }
  
  /**
   * @swagger
   *
   *   responses:
   *     ConnectRequire:
   *       description: Connectfez vous pour lister les utilisateurs.
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Error'
   */
  export class ConnectRequire extends CustomError {
    constructor(description) {
      super('Connectez vous pour lister tous les utilisateurs', 404, description);
    }
  }
  
  export class EmailOuMotDePassNonValide extends CustomError {
    constructor(description) {
      super(
        'Email ou mot de pass non valide.',
        405,
        description
      );
    }
  }
  
  export class UtilisteurExistDeja extends CustomError {
    constructor(description) {
      super(
        'Utilisateur existe daja',
        406,
        description
      );
    }
  }
  
  export class UtilisateurAjoute extends CustomError {
    constructor(description) {
      super(
        'Utilisateur ajouté avec succés.',
        407,
        description
      );
    }
  }

  export class UtilisateurNonAjoute extends CustomError {
    constructor(description) {
      super(
        'Erreur utlisateur non ajouté.',
        407,
        description
      );
    }
  }
  
  export class EmailDoesntExist extends CustomError {
    constructor(description) {
      super('Email inexistant.', 408, description);
    }
  }
  
  /**
   * @swagger
   *
   *   responses:
   *     Conflict:
   *       description: Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Error'
   */
  export class Conflict extends CustomError {
    constructor(description) {
      super(
        'Indicates that the request could not be processed because of conflict in the current state of the resource, such as an edit conflict between multiple simultaneous updates.',
        409,
        description
      );
    }
  }
  
  export class ConnectSucces extends CustomError {
    constructor(description) {
      super(
        'Utilisateur connecté.',
        410,
        description
      );
    }
  }
  
  export class UnsupportedMediaType extends CustomError {
    constructor(description) {
      super(
        'The request entity has a media type which the server or resource does not support. This API only supports JSON payload.',
        415,
        description
      );
    }
  }
  
  /**
   * @swagger
   *
   *   responses:
   *     InvalidToken:
   *       description: The provided token is expired or otherwise invalid.
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Error'
   */
  export class InvalidToken extends CustomError {
    constructor(description) {
      super(
        'The provided token is expired or otherwise invalid.',
        498,
        description
      );
    }
  }
  
  /**
   * @swagger
   *
   *   responses:
   *     TokenRequired:
   *       description: A token is required but was not submitted.
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/definitions/Error'
   */
  export class TokenRequired extends CustomError {
    constructor(description) {
      super('A token is required but was not submitted.', 499, description);
    }
  }
  
  export class InternalServerError extends CustomError {
    constructor(description) {
      super('Oooops something wrong happened.', 500, description);
    }
  }
  
  export class NotImplemented extends CustomError {
    constructor(description) {
      super(
        'The server either does not recognize the request method, or it lacks the ability to fulfil the request.',
        501,
        description
      );
    }
  }
  
  export class BadGateway extends CustomError {
    constructor(description) {
      super(
        'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
        502,
        description
      );
    }
  }
  
  export class ServiceUnvailable extends CustomError {
    constructor(description) {
      super(
        'The server is currently unavailable (because it is overloaded or down for maintenance).',
        503,
        description
      );
    }
  }
  
  export class GatewayTimeout extends CustomError {
    constructor(description) {
      super(
        'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
        504,
        description
      );
    }
  }
  
  export class HttpVersionNotSupported extends CustomError {
    constructor(description) {
      super(
        'The server does not support the HTTP protocol version used in the request.',
        505,
        description
      );
    }
  }
  
