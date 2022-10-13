import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import decodeJwt from 'jwt-decode';

type UserRole = 'admin' | 'manager';
type JwtPayload = { userNo: number; roles: UserRole[]; exp: number };
type User = { roles: UserRole[] };
type AuthAction = {
  type: 'SIGN_IN';
  user: { username: string; displayName: string; accessToken: string };
};

export const authActionAtom = atom<null, AuthAction>(null, async (get, set, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      const { accessToken } = action.user;
      set(accessTokenAtom, accessToken);
    }
  }
});

const accessTokenAtom = atomWithStorage<string | null>('accessToken', null);

const userAtom = atom<User>((get) => {
  const accessToken = get(accessTokenAtom);

  if (!accessToken) {
    return { roles: [] };
  }

  try {
    const { roles, exp }: JwtPayload = decodeJwt(accessToken);
    const isExpired = exp * 1000 < Date.now();

    if (isExpired) {
      return { roles: [] };
    }

    return { roles };
  } catch (error) {
    console.error(error);
    return { roles: [] };
  }
});

export const signInErrorAtom = atom('');

export const isAuthAtom = atom((get) => {
  return get(userAtom).roles.length > 0;
});
