/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onCreateBusiness(filter: $filter) {
      id
      name
      category
      address
      latitude
      longitude
      phoneNumber
      website
      rating
      images
      reviews {
        nextToken
        __typename
      }
      reservations {
        nextToken
        __typename
      }
      claimedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onUpdateBusiness(filter: $filter) {
      id
      name
      category
      address
      latitude
      longitude
      phoneNumber
      website
      rating
      images
      reviews {
        nextToken
        __typename
      }
      reservations {
        nextToken
        __typename
      }
      claimedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness($filter: ModelSubscriptionBusinessFilterInput) {
    onDeleteBusiness(filter: $filter) {
      id
      name
      category
      address
      latitude
      longitude
      phoneNumber
      website
      rating
      images
      reviews {
        nextToken
        __typename
      }
      reservations {
        nextToken
        __typename
      }
      claimedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      reviews {
        nextToken
        __typename
      }
      favorites {
        nextToken
        __typename
      }
      reservations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      username
      email
      reviews {
        nextToken
        __typename
      }
      favorites {
        nextToken
        __typename
      }
      reservations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      username
      email
      reviews {
        nextToken
        __typename
      }
      favorites {
        nextToken
        __typename
      }
      reservations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onCreateReview(filter: $filter, owner: $owner) {
      id
      content
      rating
      businessID
      owner
      helpfulVotes
      createdAt
      updatedAt
      userReviewsId
      businessReviewsId
      __typename
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onUpdateReview(filter: $filter, owner: $owner) {
      id
      content
      rating
      businessID
      owner
      helpfulVotes
      createdAt
      updatedAt
      userReviewsId
      businessReviewsId
      __typename
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview(
    $filter: ModelSubscriptionReviewFilterInput
    $owner: String
  ) {
    onDeleteReview(filter: $filter, owner: $owner) {
      id
      content
      rating
      businessID
      owner
      helpfulVotes
      createdAt
      updatedAt
      userReviewsId
      businessReviewsId
      __typename
    }
  }
`;
export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite(
    $filter: ModelSubscriptionFavoriteFilterInput
    $owner: String
  ) {
    onCreateFavorite(filter: $filter, owner: $owner) {
      id
      businessID
      userID
      createdAt
      updatedAt
      userFavoritesId
      owner
      __typename
    }
  }
`;
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite(
    $filter: ModelSubscriptionFavoriteFilterInput
    $owner: String
  ) {
    onUpdateFavorite(filter: $filter, owner: $owner) {
      id
      businessID
      userID
      createdAt
      updatedAt
      userFavoritesId
      owner
      __typename
    }
  }
`;
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite(
    $filter: ModelSubscriptionFavoriteFilterInput
    $owner: String
  ) {
    onDeleteFavorite(filter: $filter, owner: $owner) {
      id
      businessID
      userID
      createdAt
      updatedAt
      userFavoritesId
      owner
      __typename
    }
  }
`;
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation(
    $filter: ModelSubscriptionReservationFilterInput
    $owner: String
  ) {
    onCreateReservation(filter: $filter, owner: $owner) {
      id
      businessID
      userID
      dateTime
      status
      createdAt
      updatedAt
      userReservationsId
      businessReservationsId
      owner
      __typename
    }
  }
`;
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation(
    $filter: ModelSubscriptionReservationFilterInput
    $owner: String
  ) {
    onUpdateReservation(filter: $filter, owner: $owner) {
      id
      businessID
      userID
      dateTime
      status
      createdAt
      updatedAt
      userReservationsId
      businessReservationsId
      owner
      __typename
    }
  }
`;
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation(
    $filter: ModelSubscriptionReservationFilterInput
    $owner: String
  ) {
    onDeleteReservation(filter: $filter, owner: $owner) {
      id
      businessID
      userID
      dateTime
      status
      createdAt
      updatedAt
      userReservationsId
      businessReservationsId
      owner
      __typename
    }
  }
`;
