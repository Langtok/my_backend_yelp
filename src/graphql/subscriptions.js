/* eslint-disable */
// This is an auto-generated file. This will be overwritten.

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
      id
      name
      category
      address
      phoneNumber
      website
      rating
      images
      createdAt
      updatedAt
      owner
    }
  }
`;

export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
      id
      name
      category
      address
      phoneNumber
      website
      rating
      images
      createdAt
      updatedAt
      owner
    }
  }
`;

export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
      id
    }
  }
`;

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
    }
  }
`;

export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
      id
      content
      rating
      businessID
      owner
      helpfulVotes
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
      id
      content
      rating
      businessID
      owner
      helpfulVotes
      createdAt
      updatedAt
    }
  }
`;

export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
      id
    }
  }
`;

export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite {
    onCreateFavorite {
      id
      businessID
      userID
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite {
    onUpdateFavorite {
      id
      businessID
      userID
      createdAt
      updatedAt
    }
  }
`;

export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite {
    onDeleteFavorite {
      id
    }
  }
`;

export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation {
    onCreateReservation {
      id
      businessID
      userID
      dateTime
      status
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation {
    onUpdateReservation {
      id
      businessID
      userID
      dateTime
      status
      createdAt
      updatedAt
    }
  }
`;

export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation {
    onDeleteReservation {
      id
    }
  }
`;
