export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  password?: string | null;
  accounts: Account[];
  sessions: Session[];
  trades: Trade[];
}

export interface Account {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;
  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
  user?: User;
}

export interface Session {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user?: User;
}

export interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}

export interface Trade {
  id: string;
  userId: string;
  pair: string;
  date: Date;
  session?: string | null;
  entryTF?: string | null;
  direction: string; // "LONG" or "SHORT"
  pnl?: number | null;
  rr?: number | null;
  day?: string | null;
  emotion?: string | null;
  notes?: string | null;
  user?: User;
}

export type CreateTradeInput = Omit<Trade, 'id' | 'userId' | 'user' | 'date' | 'pnl' | 'rr'> & {
  date: string | Date;
  pnl: string | number | null;
  rr: string | number | null;
};
