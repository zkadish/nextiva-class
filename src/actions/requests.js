import {
  Loading,
  Loaded,
  OnError,
  Licensing,
  Permissions,
} from './constants';

export const loading = bool => ({
  type: Loading,
  loading: bool,
});

export const loaded = bool => ({
  type: Loaded,
  loaded: bool,
});

export const onError = err => ({
  type: OnError,
  error: err,
});

export const licensing = data => ({
  type: Licensing,
  data,
});

export const permissions = data => ({
  type: Permissions,
  data,
});
