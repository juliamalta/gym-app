/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AbbreviationTaken = {
  __typename?: 'AbbreviationTaken';
  message: Scalars['String']['output'];
};

export type Account = {
  __typename?: 'Account';
  accountNo?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Float']['output'];
  branchNo?: Maybe<Scalars['String']['output']>;
  category: Scalars['String']['output'];
  children: Array<Account>;
  closingDay?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  companies: Array<Company>;
  contra: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notPending: Scalars['Float']['output'];
  openingBalanceTransaction?: Maybe<OpeningBalanceTransaction>;
  parent?: Maybe<Account>;
  paymentDay?: Maybe<Scalars['Int']['output']>;
  pending: Scalars['Float']['output'];
  profitAndLoss?: Maybe<Scalars['String']['output']>;
  routingNo?: Maybe<Scalars['String']['output']>;
  specialAccount?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};


export type AccountChildrenArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AccountIsUsed = {
  __typename?: 'AccountIsUsed';
  message: Scalars['String']['output'];
};

export type AccountLinkedToPaymentMethod = {
  __typename?: 'AccountLinkedToPaymentMethod';
  message: Scalars['String']['output'];
};

export type Associate = {
  __typename?: 'Associate';
  avatar?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Associate>;
  category: Scalars['String']['output'];
  companies: Array<Company>;
  defaultRate?: Maybe<Scalars['Float']['output']>;
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  maxRate?: Maybe<Scalars['Float']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  payBusiness: Scalars['Boolean']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  type: AssociateType;
};

export type AssociateDisplayNameTaken = {
  __typename?: 'AssociateDisplayNameTaken';
  message: Scalars['String']['output'];
};

export type AssociateOccupied = {
  __typename?: 'AssociateOccupied';
  message: Scalars['String']['output'];
};

export type AssociateType = {
  __typename?: 'AssociateType';
  addCostToSale: Scalars['Boolean']['output'];
  addFinanceCost: Scalars['Boolean']['output'];
  commissionType: Scalars['String']['output'];
  defaultRate: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  itemClassifications: Array<ItemClassification>;
  maxRate: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  payoutType: Scalars['String']['output'];
  positions: Array<Position>;
  rateModifier: Scalars['Float']['output'];
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  typesOfSales: Array<Scalars['String']['output']>;
};

export type AssociateTypeOccupied = {
  __typename?: 'AssociateTypeOccupied';
  message: Scalars['String']['output'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  viewer: Viewer;
};

export type AuthorizeDiscountInput = {
  authorize: Scalars['Boolean']['input'];
  estimateId: Scalars['Int']['input'];
  /** Necessary if "authorize" = "false" */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type Avatar = {
  __typename?: 'Avatar';
  id: Scalars['Int']['output'];
  initials: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Bank = {
  __typename?: 'Bank';
  abaRouting?: Maybe<Scalars['String']['output']>;
  accountNo?: Maybe<Scalars['String']['output']>;
  achRouting?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  postal?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  swift?: Maybe<Scalars['String']['output']>;
};

export type BonusProfile = {
  __typename?: 'BonusProfile';
  byPercentage: Scalars['Boolean']['output'];
  frequency: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  thresholds: Array<BonusThreshold>;
  type: Scalars['String']['output'];
};

export type BonusProfileOccupied = {
  __typename?: 'BonusProfileOccupied';
  message: Scalars['String']['output'];
};

export type BonusThreshold = {
  __typename?: 'BonusThreshold';
  goal: Scalars['Float']['output'];
  rate: Scalars['Float']['output'];
};

export type Building = {
  __typename?: 'Building';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contactName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  postal?: Maybe<Scalars['String']['output']>;
  propertyType: Scalars['String']['output'];
  state?: Maybe<State>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CcDepositTransaction = Transaction & {
  __typename?: 'CcDepositTransaction';
  amount: Scalars['Float']['output'];
  bankCharges?: Maybe<Scalars['Float']['output']>;
  date: Scalars['Date']['output'];
  depositedAmount: Scalars['Float']['output'];
  description?: Maybe<Scalars['String']['output']>;
  documentNo?: Maybe<Scalars['String']['output']>;
  entries: Array<Entry>;
  files: Array<TransactionFile>;
  history: Array<TransactionHistory>;
  id: Scalars['Int']['output'];
  isVoid: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  receivableSettlements: Array<ReceivableSettlement>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  sequenceNo?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type CheckAuthResponse = AuthPayload | CompanySelection;

export type CommissionProfile = {
  __typename?: 'CommissionProfile';
  commissionBase: Scalars['String']['output'];
  commissionType: Scalars['String']['output'];
  estimatedRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  includeAssociateCost: Scalars['Boolean']['output'];
  includeFinancingCost: Scalars['Boolean']['output'];
  includeSubsidizedFinancingCost: Scalars['Boolean']['output'];
  itemClassifications: Array<ItemClassification>;
  name: Scalars['String']['output'];
  payoutType: Scalars['String']['output'];
  position: Position;
  priceType: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  rateModifier: Scalars['Float']['output'];
  tiers: Array<CommissionTier>;
  typesOfSales: Array<Scalars['String']['output']>;
};

export type CommissionProfileOccupied = {
  __typename?: 'CommissionProfileOccupied';
  message: Scalars['String']['output'];
};

export type CommissionTier = {
  __typename?: 'CommissionTier';
  limit: Scalars['Float']['output'];
  rate: Scalars['Float']['output'];
};

export type CommonTransaction = Transaction & {
  __typename?: 'CommonTransaction';
  amount: Scalars['Float']['output'];
  date: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  documentNo?: Maybe<Scalars['String']['output']>;
  entries: Array<Entry>;
  files: Array<TransactionFile>;
  history: Array<TransactionHistory>;
  id: Scalars['Int']['output'];
  isVoid: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  sequenceNo?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Company = {
  __typename?: 'Company';
  acronym: Scalars['String']['output'];
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  createdAt: Scalars['DateTime']['output'];
  defaultMarkup: Scalars['Float']['output'];
  displayName: Scalars['String']['output'];
  document1?: Maybe<Scalars['String']['output']>;
  document2?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  group: Group;
  groupId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postal?: Maybe<Scalars['String']['output']>;
  settings: CompanySettings;
  state?: Maybe<State>;
  status: Scalars['String']['output'];
  streetNumber?: Maybe<Scalars['String']['output']>;
  timezone: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type CompanySelection = {
  __typename?: 'CompanySelection';
  viewer: Viewer;
};

export type CompanySettings = {
  __typename?: 'CompanySettings';
  accountingMethod: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  dateFormat: Scalars['String']['output'];
  fiscalYearEnd: Scalars['String']['output'];
  invoiceNumberPrefix: Scalars['String']['output'];
  journalNumberPrefix: Scalars['String']['output'];
  nextInvoiceNumber: Scalars['String']['output'];
  nextJournalNumber: Scalars['String']['output'];
  nextPayablePaymentNumber: Scalars['String']['output'];
  nextProjectNumber: Scalars['String']['output'];
  nextPurchaseOrderNumber: Scalars['String']['output'];
  nextReceivablePaymentNumber: Scalars['String']['output'];
  nextSaleOrderNumber: Scalars['String']['output'];
  nextSalesReceiptNumber: Scalars['String']['output'];
  numberFormat: Scalars['String']['output'];
  payablePaymentNumberPrefix: Scalars['String']['output'];
  projectNumberPrefix: Scalars['String']['output'];
  purchaseOrderNumberPrefix: Scalars['String']['output'];
  receivablePaymentNumberPrefix: Scalars['String']['output'];
  saleOrderNumberPrefix: Scalars['String']['output'];
  salesReceiptNumberPrefix: Scalars['String']['output'];
};

export type CompanySettingsNumbering = {
  __typename?: 'CompanySettingsNumbering';
  mask: Scalars['String']['output'];
  nextNumber: Scalars['Int']['output'];
};

export type CompanyUser = {
  __typename?: 'CompanyUser';
  company: Company;
  groupUser: GroupUser;
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  role: Role;
  user: User;
};

export type Competitor = {
  __typename?: 'Competitor';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  strengths?: Maybe<Scalars['String']['output']>;
  weaknesses?: Maybe<Scalars['String']['output']>;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  states: Array<State>;
};

export type CreateCreditCardTermResponse = Term | TermNameTaken;

export type CreateEmbeddedItemAndChildProductInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  estimateItemId: Scalars['Int']['input'];
  parentId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
  variations: Array<CreateEmbeddedItemAndChildProductVariationsInput>;
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateEmbeddedItemAndChildProductResponse = {
  __typename?: 'CreateEmbeddedItemAndChildProductResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type CreateEmbeddedItemAndChildProductVariationsInput = {
  optionId: Scalars['Int']['input'];
  parentVariationId: Scalars['Int']['input'];
};

export type CreateEmbeddedItemInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  estimateItemId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
};

export type CreateEmbeddedItemResponse = {
  __typename?: 'CreateEmbeddedItemResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type CreateEstimateItemAndChildProductInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  estimateId: Scalars['Int']['input'];
  parentId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  variations: Array<CreateEstimateItemAndChildProductVariationsInput>;
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateEstimateItemAndChildProductResponse = {
  __typename?: 'CreateEstimateItemAndChildProductResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type CreateEstimateItemAndChildProductVariationsInput = {
  optionId: Scalars['Int']['input'];
  parentVariationId: Scalars['Int']['input'];
};

export type CreateEstimateItemResponse = {
  __typename?: 'CreateEstimateItemResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type CreateEstimateSubItemAndChildProductInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  estimateItemId: Scalars['Int']['input'];
  parentId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
  variations: Array<CreateEstimateSubItemAndChildProductVariationsInput>;
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateEstimateSubItemAndChildProductResponse = {
  __typename?: 'CreateEstimateSubItemAndChildProductResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type CreateEstimateSubItemAndChildProductVariationsInput = {
  optionId: Scalars['Int']['input'];
  parentVariationId: Scalars['Int']['input'];
};

export type CreateEstimateSubItemResponse = {
  __typename?: 'CreateEstimateSubItemResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type CreateFinancingTermResponse = Term | TermNameTaken;

export type CreateGroupItemResponse = {
  __typename?: 'CreateGroupItemResponse';
  estimate: Estimate;
};

export type CreatePaymentMethodResponse = PaymentMethod | PaymentMethodNameTaken;

export type CreateProductGroupResponse = ProductGroup | ProductGroupSkuPortionTaken;

export type CreateStagesTermInput = {
  companyIds?: Array<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rate?: InputMaybe<Scalars['Float']['input']>;
  stages: Array<CreateStagesTermStageInput>;
  typesOfSales: Array<Scalars['String']['input']>;
};

export type CreateStagesTermResponse = Term | TermNameTaken;

export type CreateStagesTermStageInput = {
  amount: Scalars['Float']['input'];
  expectedDueIn: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  stage?: InputMaybe<Scalars['String']['input']>;
  transitStageId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTeamResponse = AbbreviationTaken | Team;

export type CreateTemplateEstimateEmbeddedItemResponse = {
  __typename?: 'CreateTemplateEstimateEmbeddedItemResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type CreateTemplateEstimateItemResponse = {
  __typename?: 'CreateTemplateEstimateItemResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type CreateTermResponse = Term | TermNameTaken;

export type CreateVendorLandedCostInput = {
  accountId: Scalars['Int']['input'];
  addToProducts: Scalars['Boolean']['input'];
  amount: Scalars['Float']['input'];
  amountType: Scalars['String']['input'];
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['Int']['input'];
};

export type CreateWorkerResponse = EmailTaken | Worker;

export type Customer = {
  __typename?: 'Customer';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressLine3?: Maybe<Scalars['String']['output']>;
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Country>;
  billingPostal?: Maybe<Scalars['String']['output']>;
  billingState?: Maybe<State>;
  billingStreetNumber?: Maybe<Scalars['String']['output']>;
  building?: Maybe<Building>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  document1?: Maybe<Scalars['String']['output']>;
  document2?: Maybe<Scalars['String']['output']>;
  documentType1?: Maybe<Scalars['String']['output']>;
  documentType2?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  exemptionDetails?: Maybe<Scalars['String']['output']>;
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isTaxExempt: Scalars['Boolean']['output'];
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  openBalance?: Maybe<Scalars['Int']['output']>;
  openBalanceDate?: Maybe<Scalars['String']['output']>;
  phone1?: Maybe<Scalars['String']['output']>;
  phone2?: Maybe<Scalars['String']['output']>;
  postal?: Maybe<Scalars['String']['output']>;
  projects: Array<ProjectGroup>;
  state?: Maybe<State>;
  status: Scalars['String']['output'];
  streetNumber?: Maybe<Scalars['String']['output']>;
  taxNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type CustomerSource = {
  __typename?: 'CustomerSource';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  specialSource?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Dashboard = {
  __typename?: 'Dashboard';
  activeEstimatesTotal: Scalars['Float']['output'];
  approvalThisWeekTotal: Scalars['Float']['output'];
  hotEstimatesTotal: Scalars['Float']['output'];
  lastYear: Array<Scalars['Float']['output']>;
  monthsMarkup: Scalars['Float']['output'];
  monthsNumberOfSales: Scalars['Int']['output'];
  monthsProfitMargin: Scalars['Float']['output'];
  monthsProfitMarginPercentage: Scalars['Float']['output'];
  monthsSalesTotal: Scalars['Float']['output'];
  numberOfActiveEstimates: Scalars['Int']['output'];
  numberOfApprovalThisWeek: Scalars['Int']['output'];
  numberOfHotEstimates: Scalars['Int']['output'];
  thisYear: Array<Scalars['Float']['output']>;
  topLeadSource?: Maybe<CustomerSource>;
  topLeadSourcePercentage?: Maybe<Scalars['Float']['output']>;
};

export type DashboardFilters = {
  month: Scalars['Int']['input'];
};

export type DeleteAccountResponse = AccountIsUsed | DeleteResponse;

export type DeleteAssociateResponse = AssociateOccupied | DeleteResponse;

export type DeleteEstimateEmbeddedItemResponse = {
  __typename?: 'DeleteEstimateEmbeddedItemResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type DeleteEstimateItemResponse = {
  __typename?: 'DeleteEstimateItemResponse';
  estimate: Estimate;
  estimateItemId: Scalars['Int']['output'];
  isSubItem: Scalars['Boolean']['output'];
};

export type DeletePayablePaymentsResponse = DeletePayablePaymentsSuccess | PaymentsHaveBeenDeposited;

export type DeletePayablePaymentsSuccess = {
  __typename?: 'DeletePayablePaymentsSuccess';
  payables: Array<Payable>;
};

export type DeleteReceivablePaymentsResponse = DeleteReceivablePaymentsSuccess | PaymentsHaveBeenDeposited;

export type DeleteReceivablePaymentsSuccess = {
  __typename?: 'DeleteReceivablePaymentsSuccess';
  receivables: Array<Receivable>;
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  ok: Scalars['Boolean']['output'];
};

export type DeleteTermResponse = DeleteResponse | TermOccupied;

export type DeleteUserResponse = DeleteResponse | UserIsUsed;

export type DeleteVendorLandedCostInput = {
  vendorLandedCostId: Scalars['Int']['input'];
};

export type DeleteWarehouseLocationResponse = Warehouse;

export type DeleteWorkerResponse = DeleteResponse | WorkerIsUsed;

export type Delivery = {
  __typename?: 'Delivery';
  date1?: Maybe<Scalars['String']['output']>;
  date2?: Maybe<Scalars['String']['output']>;
  dateType: Scalars['String']['output'];
  days1?: Maybe<Scalars['Int']['output']>;
  days2?: Maybe<Scalars['Int']['output']>;
  daysType?: Maybe<Scalars['String']['output']>;
  fromDate?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type DeliveryInput = {
  deliveryDate1?: InputMaybe<Scalars['String']['input']>;
  deliveryDate2?: InputMaybe<Scalars['String']['input']>;
  deliveryDateType: Scalars['String']['input'];
  deliveryDays1?: InputMaybe<Scalars['Int']['input']>;
  deliveryDays2?: InputMaybe<Scalars['Int']['input']>;
  deliveryDaysType?: InputMaybe<Scalars['String']['input']>;
  deliveryFromDate?: InputMaybe<Scalars['String']['input']>;
  deliveryType: Scalars['String']['input'];
};

export type DrawerProductsResponse = {
  __typename?: 'DrawerProductsResponse';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  products: Array<Product>;
};

export type DrawerServicesResponse = {
  __typename?: 'DrawerServicesResponse';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  services: Array<Product>;
};

export type EditCompaniesDefaultMarkupInput = {
  companies: Array<EditCompaniesDefaultMarkup_Company>;
  updateEstimateItems?: InputMaybe<Scalars['Boolean']['input']>;
  updateProducts?: InputMaybe<Scalars['String']['input']>;
};

export type EditCompaniesDefaultMarkup_Company = {
  companyId: Scalars['Int']['input'];
  markup: Scalars['Float']['input'];
};

export type EditCreditCardTermResponse = Term | TermNameTaken;

export type EditEstimateDiscountInput = {
  date: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  estimateId: Scalars['Int']['input'];
};

export type EditEstimateEmbeddedItemServiceBasePriceResponse = {
  __typename?: 'EditEstimateEmbeddedItemServiceBasePriceResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type EditEstimateItemDeliveryInput = {
  delivery?: InputMaybe<DeliveryInput>;
  projectId: Scalars['Int']['input'];
};

export type EditEstimateItemDiscountInput = {
  date: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  estimateItemId: Scalars['Int']['input'];
};

export type EditEstimateItemDiscountResponse = {
  __typename?: 'EditEstimateItemDiscountResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type EditEstimateItemImageInput = {
  estimateItemId: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
};

export type EditEstimateItemOriginalPriceInput = {
  date: Scalars['String']['input'];
  estimateItemId: Scalars['Int']['input'];
  originalUnitPrice: Scalars['Float']['input'];
};

export type EditEstimateItemOriginalPriceResponse = {
  __typename?: 'EditEstimateItemOriginalPriceResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type EditEstimateItemPricePerUnitInput = {
  date: Scalars['String']['input'];
  estimateItemId: Scalars['Int']['input'];
  pricePerUnit: Scalars['Float']['input'];
};

export type EditEstimateItemPricePerUnitResponse = {
  __typename?: 'EditEstimateItemPricePerUnitResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type EditEstimateItemQuantityInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  estimateItemId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
};

export type EditEstimateItemQuantityResponse = {
  __typename?: 'EditEstimateItemQuantityResponse';
  estimate: Estimate;
  estimateItem: EstimateItem;
};

export type EditEstimatePriceInput = {
  date: Scalars['String']['input'];
  estimateId: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
};

export type EditFinancingTermResponse = Term | TermNameTaken;

export type EditGroupItemDiscountInput = {
  date: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  groupItemId: Scalars['Int']['input'];
};

export type EditGroupItemDiscountResponse = {
  __typename?: 'EditGroupItemDiscountResponse';
  estimate: Estimate;
  groupedItems: Array<EstimateItem>;
};

export type EditGroupItemPricePerUnitInput = {
  date: Scalars['String']['input'];
  groupItemId: Scalars['Int']['input'];
  pricePerUnit: Scalars['Float']['input'];
};

export type EditGroupItemPricePerUnitResponse = {
  __typename?: 'EditGroupItemPricePerUnitResponse';
  estimate: Estimate;
  groupedItems: Array<EstimateItem>;
};

export type EditPayableResponse = Payable | PaymentsHaveBeenDeposited;

export type EditPaymentMethodResponse = PaymentMethod | PaymentMethodNameTaken;

export type EditProductOpeningInventoryInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  openingInventory?: InputMaybe<Array<EditProductOpeningInventoryOpeningInventoryInput>>;
};

export type EditProjectBillingAddressInfoInput = {
  billingAddressComplement?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine3?: InputMaybe<Scalars['String']['input']>;
  billingCity?: InputMaybe<Scalars['String']['input']>;
  billingCountryId?: InputMaybe<Scalars['Int']['input']>;
  billingPostal?: InputMaybe<Scalars['String']['input']>;
  billingStateId?: InputMaybe<Scalars['Int']['input']>;
  billingStreetNumber?: InputMaybe<Scalars['String']['input']>;
  buildingId?: InputMaybe<Scalars['Int']['input']>;
  copyBillingAddressFromCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  projectId: Scalars['Int']['input'];
};

export type EditProjectCustomerInfoInput = {
  addressComplement?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  buildingId?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  document1?: InputMaybe<Scalars['String']['input']>;
  document2?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['Int']['input'];
  stateId?: InputMaybe<Scalars['Int']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type EditProjectDeliveryInput = {
  delivery: DeliveryInput;
  projectId: Scalars['Int']['input'];
};

export type EditProjectFormFooterDetailsInput = {
  formFooterDetails?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['Int']['input'];
};

export type EditProjectFormNotesInput = {
  formNotes?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['Int']['input'];
};

export type EditProjectFormTermsInput = {
  formTerms?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['Int']['input'];
};

export type EditProjectInfoAssociateInput = {
  associateId: Scalars['Int']['input'];
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  projectAssociateId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditProjectInfoContactInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type EditProjectInfoInput = {
  approvalForecast?: InputMaybe<Scalars['String']['input']>;
  associates?: InputMaybe<Array<EditProjectInfoAssociateInput>>;
  briefingNotes?: InputMaybe<Scalars['String']['input']>;
  budget?: InputMaybe<Scalars['Float']['input']>;
  buildingId?: InputMaybe<Scalars['Int']['input']>;
  contacts?: InputMaybe<Array<EditProjectInfoContactInput>>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerExemptionDetails?: InputMaybe<Scalars['String']['input']>;
  customerFax?: InputMaybe<Scalars['String']['input']>;
  customerIsTaxExempt: Scalars['Boolean']['input'];
  customerMobile?: InputMaybe<Scalars['String']['input']>;
  customerName: Scalars['String']['input'];
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  customerSourceId?: InputMaybe<Scalars['Int']['input']>;
  customerTaxNumber?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  generalNotes?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  projectId: Scalars['Int']['input'];
  projectOwnerId: Scalars['Int']['input'];
  shippingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  shippingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  shippingAddressLine3?: InputMaybe<Scalars['String']['input']>;
  shippingCity?: InputMaybe<Scalars['String']['input']>;
  shippingCountryId?: InputMaybe<Scalars['Int']['input']>;
  shippingPostal?: InputMaybe<Scalars['String']['input']>;
  shippingStateId?: InputMaybe<Scalars['Int']['input']>;
  unitSystem: Scalars['String']['input'];
};

export type EditProjectShippingInfoInput = {
  buildingId?: InputMaybe<Scalars['Int']['input']>;
  copyShippingAddressFrom?: InputMaybe<Scalars['String']['input']>;
  endCustomerDocument1?: InputMaybe<Scalars['String']['input']>;
  endCustomerDocument2?: InputMaybe<Scalars['String']['input']>;
  endCustomerEmail?: InputMaybe<Scalars['String']['input']>;
  endCustomerFax?: InputMaybe<Scalars['String']['input']>;
  endCustomerId?: InputMaybe<Scalars['Int']['input']>;
  endCustomerMobile?: InputMaybe<Scalars['String']['input']>;
  endCustomerName: Scalars['String']['input'];
  endCustomerPhone?: InputMaybe<Scalars['String']['input']>;
  endCustomerStreetNumber?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['Int']['input'];
  shippingAddressComplement?: InputMaybe<Scalars['String']['input']>;
  shippingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  shippingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  shippingAddressLine3?: InputMaybe<Scalars['String']['input']>;
  shippingCity?: InputMaybe<Scalars['String']['input']>;
  shippingCountryId?: InputMaybe<Scalars['Int']['input']>;
  shippingPostal?: InputMaybe<Scalars['String']['input']>;
  shippingStateId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditProjectStageInput = {
  projectId: Scalars['Int']['input'];
  stage: Scalars['String']['input'];
};

export type EditSalesOrderDateInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  salesOrderId: Scalars['Int']['input'];
};

export type EditSettingsDiscountInput = {
  discountApprovalType: Scalars['String']['input'];
  discountDisplay: Scalars['String']['input'];
  discountType: Scalars['String']['input'];
  persistDiscountRate: Scalars['Boolean']['input'];
  positions: Array<EditSettingsDiscount_PositionInput>;
  workers: Array<EditSettingsDiscount_WorkerInput>;
};

export type EditSettingsDiscountResponse = {
  __typename?: 'EditSettingsDiscountResponse';
  group: Group;
  positions: Array<Position>;
};

export type EditSettingsDiscount_PositionInput = {
  isDiscountApprover: Scalars['Boolean']['input'];
  positionCompanies: Array<EditSettingsDiscount_Position_CompaniesInput>;
  positionId: Scalars['Int']['input'];
};

export type EditSettingsDiscount_Position_CompaniesInput = {
  companyId: Scalars['Int']['input'];
  maxDiscount: Scalars['Float']['input'];
};

export type EditSettingsDiscount_WorkerInput = {
  companiesWorkerApprovesIn: Array<Scalars['Int']['input']>;
  workerId: Scalars['Int']['input'];
};

export type EditSettingsDownPaymentApprovalInput = {
  approverPositions: Array<Scalars['Int']['input']>;
  downPaymentApprovalType: Scalars['String']['input'];
  workers: Array<EditSettingsDownPaymentApproval_WorkerInput>;
};

export type EditSettingsDownPaymentApprovalResponse = {
  __typename?: 'EditSettingsDownPaymentApprovalResponse';
  group: Group;
  positions: Array<Position>;
};

export type EditSettingsDownPaymentApproval_WorkerInput = {
  companiesWorkerApprovesIn: Array<Scalars['Int']['input']>;
  workerId: Scalars['Int']['input'];
};

export type EditSettingsGeneralDocumentSequenceInput = {
  id: Scalars['Int']['input'];
  invoiceNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  journalNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  nextInvoiceNumber: Scalars['String']['input'];
  nextJournalNumber: Scalars['String']['input'];
  nextPayablePaymentNumber: Scalars['String']['input'];
  nextProjectNumber: Scalars['String']['input'];
  nextPurchaseOrderNumber: Scalars['String']['input'];
  nextReceivablePaymentNumber: Scalars['String']['input'];
  nextSaleOrderNumber: Scalars['String']['input'];
  nextSalesReceiptNumber: Scalars['String']['input'];
  payablePaymentNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  projectNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  purchaseOrderNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  receivablePaymentNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  saleOrderNumberPrefix?: InputMaybe<Scalars['String']['input']>;
  salesReceiptNumberPrefix?: InputMaybe<Scalars['String']['input']>;
};

export type EditSettingsGeneralInput = {
  companies: Array<EditSettingsGeneralDocumentSequenceInput>;
  defaultTypeOfSales: Scalars['String']['input'];
  typesOfSales: Array<Scalars['String']['input']>;
};

export type EditSettingsInvoicesEditorContentInput = {
  companyIds: Array<Scalars['Int']['input']>;
  content: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type EditSettingsInvoicesInput = {
  invoiceNotes: Array<EditSettingsInvoicesEditorContentInput>;
  invoiceTerms: Array<EditSettingsInvoicesEditorContentInput>;
};

export type EditSettingsLeadTimeInput = {
  leadTimes: Array<EditSettingsLeadTime_LeadTimeInput>;
  leadTimesByItemClassification: Scalars['Boolean']['input'];
};

export type EditSettingsLeadTime_LeadTimeInput = {
  afterDateOf: Scalars['String']['input'];
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  itemClassificationId?: InputMaybe<Scalars['Int']['input']>;
  time1: Scalars['Int']['input'];
  time2?: InputMaybe<Scalars['Int']['input']>;
  timeUnit: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type EditSettingsLeadsInput = {
  qualifications: Array<EditSettingsLeadsQualificationsInput>;
  usesLeadsModule: Scalars['Boolean']['input'];
};

export type EditSettingsLeadsQualificationsInput = {
  colorIndex: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type EditSettingsOrganizationProfileInput = {
  countryId: Scalars['Int']['input'];
  currency: Scalars['String']['input'];
  dateFormat: Scalars['String']['input'];
  fiscalYearEnd: Scalars['String']['input'];
  locale: Scalars['String']['input'];
  name: Scalars['String']['input'];
  numberFormat: Scalars['String']['input'];
};

export type EditSettingsPostSalesStagesInput = {
  postSalesAtSupplierDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesAwaitingInspectionDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesDeliveredDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesExecutiveApprovalDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesFutureDeliveryDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesInstallationDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesInstalledPendingDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesMeasurementDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesPurchaseDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesReadyToShipDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesRevisionDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesSalesApprovalDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesTransitDays?: InputMaybe<Scalars['Int']['input']>;
  postSalesWarehouseDays?: InputMaybe<Scalars['Int']['input']>;
  transitStages: Array<EditSettingsPostSalesStages_TransitStagesInput>;
};

export type EditSettingsPostSalesStages_TransitStagesInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type EditSettingsProjectQualificationsInput = {
  colorIndex: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type EditSettingsProjectStageInput = {
  projectStages: Array<EditSettingsProjectStage_StagesInput>;
};

export type EditSettingsProjectStage_StagesInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
};

export type EditSettingsProjectsEditorContentInput = {
  companyIds: Array<Scalars['Int']['input']>;
  content: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type EditSettingsProjectsInput = {
  defaultAssociates: Array<Scalars['Int']['input']>;
  dontPrintAssociateTypes: Array<Scalars['Int']['input']>;
  estimateValidityDays: Scalars['Int']['input'];
  estimateValidityDaysType: Scalars['String']['input'];
  printAssociates: Scalars['Boolean']['input'];
  projectNotes: Array<EditSettingsProjectsEditorContentInput>;
  projectQualifications: Array<EditSettingsProjectQualificationsInput>;
  projectTerms: Array<EditSettingsProjectsEditorContentInput>;
  roomLabel: Scalars['String']['input'];
  salespersonLabel: Scalars['String']['input'];
  usesProjectDesigner: Scalars['Boolean']['input'];
};

export type EditSettingsPurchaseApprovalInput = {
  approverPositions: Array<Scalars['Int']['input']>;
  purchaseApprovalType: Scalars['String']['input'];
  workers: Array<EditSettingsPurchaseApproval_WorkerInput>;
};

export type EditSettingsPurchaseApprovalResponse = {
  __typename?: 'EditSettingsPurchaseApprovalResponse';
  group: Group;
  positions: Array<Position>;
};

export type EditSettingsPurchaseApproval_WorkerInput = {
  companiesWorkerApprovesIn: Array<Scalars['Int']['input']>;
  workerId: Scalars['Int']['input'];
};

export type EditSettingsSalesOrderApprovalInput = {
  approverPositions: Array<Scalars['Int']['input']>;
  salesOrderApprovalType: Scalars['String']['input'];
  workers: Array<EditSettingsSalesOrderApproval_WorkerInput>;
};

export type EditSettingsSalesOrderApprovalResponse = {
  __typename?: 'EditSettingsSalesOrderApprovalResponse';
  group: Group;
  positions: Array<Position>;
};

export type EditSettingsSalesOrderApproval_WorkerInput = {
  companiesWorkerApprovesIn: Array<Scalars['Int']['input']>;
  workerId: Scalars['Int']['input'];
};

export type EditSettingsSalesOrdersEditorContentInput = {
  companyIds: Array<Scalars['Int']['input']>;
  content: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type EditSettingsSalesOrdersInput = {
  salesOrderNotes: Array<EditSettingsSalesOrdersEditorContentInput>;
  salesOrderTerms: Array<EditSettingsSalesOrdersEditorContentInput>;
};

export type EditSettingsSalesRevisionApprovalInput = {
  approverPositions: Array<Scalars['Int']['input']>;
  salesRevisionApprovalThreshold?: InputMaybe<Scalars['Float']['input']>;
  salesRevisionApprovalType: Scalars['String']['input'];
  workers: Array<EditSettingsSalesRevisionApproval_WorkerInput>;
};

export type EditSettingsSalesRevisionApprovalResponse = {
  __typename?: 'EditSettingsSalesRevisionApprovalResponse';
  group: Group;
  positions: Array<Position>;
};

export type EditSettingsSalesRevisionApproval_WorkerInput = {
  companiesWorkerApprovesIn: Array<Scalars['Int']['input']>;
  workerId: Scalars['Int']['input'];
};

export type EditStagesTermInput = {
  companyIds?: Array<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  rate?: InputMaybe<Scalars['Float']['input']>;
  stages: Array<EditStagesTermStageInput>;
  typesOfSales: Array<Scalars['String']['input']>;
};

export type EditStagesTermResponse = Term | TermNameTaken;

export type EditStagesTermStageInput = {
  amount: Scalars['Float']['input'];
  expectedDueIn: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  stage?: InputMaybe<Scalars['String']['input']>;
  transitStageId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditStandardProductInput = {
  active: Scalars['Boolean']['input'];
  barcode?: InputMaybe<Scalars['String']['input']>;
  calculationPerSellingQuantity?: InputMaybe<Scalars['Float']['input']>;
  companies: Array<EditStandardProduct_ProductCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  dimensionsUnit?: InputMaybe<Scalars['String']['input']>;
  displayPieces?: Scalars['Boolean']['input'];
  enteringUnit?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  generatedSku: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  minimumPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  minimumQuantityForSale?: InputMaybe<Scalars['Float']['input']>;
  multipleOfForSale?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  openingInventory?: InputMaybe<Array<EditStandardProductOpeningInventoryInput>>;
  openingInventoryDate?: InputMaybe<Scalars['String']['input']>;
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  purchasingEnteringUnit?: InputMaybe<Scalars['String']['input']>;
  purchasingPrice: Scalars['Float']['input'];
  purchasingUnit?: InputMaybe<Scalars['String']['input']>;
  reorderPoint?: InputMaybe<Scalars['Float']['input']>;
  salesCalculationUnit: Scalars['String']['input'];
  sellingPerPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  sellingUnit: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  taxable: Scalars['Boolean']['input'];
  tracksInventory: Scalars['Boolean']['input'];
  updateEstimateItems: Scalars['Boolean']['input'];
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorDescription?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['Int']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
  weightUnit?: InputMaybe<Scalars['String']['input']>;
};

export type EditTeamResponse = AbbreviationTaken | Team;

export type EditTermResponse = Term | TermNameTaken;

export type EditVendorCompanyMarkupInput = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  markup?: InputMaybe<Scalars['Float']['input']>;
};

export type EditVendorDefaultMarkupInput = {
  companies: Array<EditVendorCompanyMarkupInput>;
  updateEstimateItems?: InputMaybe<Scalars['Boolean']['input']>;
  updateProducts?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['Int']['input'];
};

export type EditVendorLandedCostInput = {
  accountId: Scalars['Int']['input'];
  addToProducts: Scalars['Boolean']['input'];
  amount: Scalars['Float']['input'];
  amountType: Scalars['String']['input'];
  companyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  vendorLandedCostId: Scalars['Int']['input'];
};

export type EditWorkerCompanyInput = {
  companyId: Scalars['Int']['input'];
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EditWorkerPositionInput = {
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  positionId: Scalars['Int']['input'];
};

export type EditWorkerResponse = EmailTaken | Worker;

export type EmailTaken = {
  __typename?: 'EmailTaken';
  message: Scalars['String']['output'];
};

export type EmbeddedItemDetails = {
  __typename?: 'EmbeddedItemDetails';
  associatesCost: Scalars['Float']['output'];
  cost: Scalars['Float']['output'];
  discount: Scalars['Float']['output'];
  estimateEmbeddedItem: EstimateEmbeddedItem;
  id: Scalars['Int']['output'];
  landedCost: Scalars['Float']['output'];
  markup: Scalars['Float']['output'];
  profitMargin: Scalars['Float']['output'];
  profitMarginPercentage: Scalars['Float']['output'];
  totalCost: Scalars['Float']['output'];
};

export type Entry = {
  __typename?: 'Entry';
  account: Account;
  amount: Scalars['Float']['output'];
  bankAccountNo?: Maybe<Scalars['String']['output']>;
  bankBranchNo?: Maybe<Scalars['String']['output']>;
  bankCode?: Maybe<Scalars['String']['output']>;
  checkAccount?: Maybe<Account>;
  checkNumber?: Maybe<Scalars['String']['output']>;
  clearings?: Maybe<Array<EntryClearing>>;
  company: Company;
  companyId: Scalars['Int']['output'];
  depositDate?: Maybe<Scalars['Date']['output']>;
  depositTransaction?: Maybe<CcDepositTransaction>;
  id: Scalars['Int']['output'];
  isDeposited: Scalars['Boolean']['output'];
  memo?: Maybe<Scalars['String']['output']>;
  payee?: Maybe<Payee>;
  paymentMethod?: Maybe<Scalars['String']['output']>;
  pending: Scalars['Float']['output'];
  project?: Maybe<Project>;
  receivementMethod?: Maybe<PaymentMethod>;
  reconciliation: Scalars['String']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
  transaction: Transaction;
  type: Scalars['String']['output'];
};

export type EntryClearing = {
  __typename?: 'EntryClearing';
  amount: Scalars['Float']['output'];
  date: Scalars['Date']['output'];
  id: Scalars['String']['output'];
};

export type EntryPreviousBalance = {
  __typename?: 'EntryPreviousBalance';
  balance: Scalars['Float']['output'];
  entry: Entry;
};

export type Estimate = {
  __typename?: 'Estimate';
  allItems: Array<EstimateItem>;
  associatesCost: Scalars['Float']['output'];
  breakdown: EstimateBreakdown;
  code: Scalars['String']['output'];
  cost: Scalars['Float']['output'];
  costNoLanded: Scalars['Float']['output'];
  deliveryService?: Maybe<EstimateItem>;
  depositPercentage?: Maybe<Scalars['Float']['output']>;
  discount: Scalars['Float']['output'];
  discountAuthorization: EstimateDiscountAuthorization;
  estimateItems: Array<EstimateItem>;
  extraCosts: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  installationService?: Maybe<EstimateItem>;
  installments: Array<EstimateInstallment>;
  isFavorite: Scalars['Boolean']['output'];
  lastSentDate?: Maybe<Scalars['DateTime']['output']>;
  lastSentDocument?: Maybe<Scalars['String']['output']>;
  lastSentExpirationDate?: Maybe<Scalars['Date']['output']>;
  lockedDiscount: Scalars['Boolean']['output'];
  markup: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  number: Scalars['String']['output'];
  numberOfInstallments: Scalars['Int']['output'];
  numberOfItems: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  priceNoTaxes: Scalars['Float']['output'];
  profitMargin: Scalars['Float']['output'];
  profitMarginPercentage: Scalars['Float']['output'];
  project: Project;
  requiresDeposit: Scalars['Boolean']['output'];
  salesOrder?: Maybe<SaleOrder>;
  salesTax?: Maybe<SalesTax>;
  taxesPrice: Scalars['Float']['output'];
  term: Term;
  version: Scalars['String']['output'];
};

export type EstimateBreakdown = {
  __typename?: 'EstimateBreakdown';
  associatesCost: Scalars['Float']['output'];
  discount: Scalars['Float']['output'];
  extraCosts: Scalars['Float']['output'];
  landedCost: Scalars['Float']['output'];
  markup: Scalars['Float']['output'];
  priceNoTaxes: Scalars['Float']['output'];
  productCost: Scalars['Float']['output'];
  productMarkup: Scalars['Float']['output'];
  productPrice: Scalars['Float']['output'];
  profitMargin: Scalars['Float']['output'];
  profitMarginPercentage: Scalars['Float']['output'];
  serviceCost: Scalars['Float']['output'];
  serviceMarkup: Scalars['Float']['output'];
  servicePrice: Scalars['Float']['output'];
  taxesPrice: Scalars['Float']['output'];
  totalCost: Scalars['Float']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type EstimateDeliveryService = {
  __typename?: 'EstimateDeliveryService';
  id: Scalars['Int']['output'];
  product: Product;
  rate: Scalars['Float']['output'];
};

export type EstimateDiscountAuthorization = {
  discountAuthorization: Scalars['String']['output'];
};

export type EstimateDiscountAuthorized = EstimateDiscountAuthorization & {
  __typename?: 'EstimateDiscountAuthorized';
  discountAuthorization: Scalars['String']['output'];
};

export type EstimateDiscountNotRequested = EstimateDiscountAuthorization & {
  __typename?: 'EstimateDiscountNotRequested';
  discountAuthorization: Scalars['String']['output'];
};

export type EstimateDiscountRequested = EstimateDiscountAuthorization & {
  __typename?: 'EstimateDiscountRequested';
  discountAuthorization: Scalars['String']['output'];
  requestDate: Scalars['DateTime']['output'];
};

export type EstimateEmbeddedItem = {
  __typename?: 'EstimateEmbeddedItem';
  associatesCost: Scalars['Float']['output'];
  basePrice: Scalars['Float']['output'];
  cost: Scalars['Float']['output'];
  dimension1?: Maybe<Scalars['Float']['output']>;
  dimension2?: Maybe<Scalars['Float']['output']>;
  dimension3?: Maybe<Scalars['Float']['output']>;
  discount: Scalars['Float']['output'];
  estimateItem: EstimateItem;
  id: Scalars['Int']['output'];
  isParent: Scalars['Boolean']['output'];
  markup: Scalars['Float']['output'];
  originalPrice: Scalars['Float']['output'];
  pieces: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  priceIsLocked: Scalars['Boolean']['output'];
  product: Product;
  profitMargin: Scalars['Float']['output'];
  profitMarginPercentage: Scalars['Float']['output'];
  quantity: Scalars['Float']['output'];
  revisedItem?: Maybe<EstimateEmbeddedItem>;
};

export type EstimateInstallationService = {
  __typename?: 'EstimateInstallationService';
  id: Scalars['Int']['output'];
  product: Product;
  rate: Scalars['Float']['output'];
};

export type EstimateInstallment = {
  __typename?: 'EstimateInstallment';
  amount: Scalars['Float']['output'];
  checkNumber?: Maybe<Scalars['String']['output']>;
  depositDate?: Maybe<Scalars['Date']['output']>;
  dueDate: Scalars['Date']['output'];
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  paymentMethod?: Maybe<PaymentMethod>;
  remarks?: Maybe<Scalars['String']['output']>;
};

export type EstimateItem = {
  __typename?: 'EstimateItem';
  basePrice: Scalars['Float']['output'];
  delivery?: Maybe<Delivery>;
  description?: Maybe<Scalars['String']['output']>;
  discount: Scalars['Float']['output'];
  embeddedItems: Array<EstimateEmbeddedItem>;
  groupedItems: Array<EstimateItem>;
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  isGroup: Scalars['Boolean']['output'];
  isGrouped: Scalars['Boolean']['output'];
  isSubItem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parentEmbeddedItem?: Maybe<EstimateEmbeddedItem>;
  price: Scalars['Float']['output'];
  room?: Maybe<ProjectRoom>;
  specifications?: Maybe<Scalars['String']['output']>;
  subItems: Array<EstimateItem>;
};

export type EstimateProfitAndLossResponse = {
  __typename?: 'EstimateProfitAndLossResponse';
  discount: Scalars['Float']['output'];
  embeddedItemsDetails: Array<EmbeddedItemDetails>;
  estimate: Estimate;
  id: Scalars['Int']['output'];
  markup: Scalars['Float']['output'];
  profitMargin: Scalars['Float']['output'];
  profitMarginPercentage: Scalars['Float']['output'];
};

export type FifoFilters = {
  from?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type FifoItem = {
  __typename?: 'FifoItem';
  productIn: Inventory;
  productsOut: Array<Inventory>;
  quantityLeft: Scalars['Float']['output'];
};

export type GrossProfitRateBreakdown = {
  __typename?: 'GrossProfitRateBreakdown';
  breakdown: EstimateBreakdown;
  date: Scalars['Date']['output'];
};

export type GrossProfitRateFilters = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type GrossProfitRateResponse = {
  __typename?: 'GrossProfitRateResponse';
  monthly: Array<GrossProfitRateBreakdown>;
  total: EstimateBreakdown;
};

export type GrossProfitRateSalesByPersonFilters = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
  workerId?: InputMaybe<Scalars['Int']['input']>;
};

export type GrossProfitRateSalesByPersonPerson = {
  __typename?: 'GrossProfitRateSalesByPersonPerson';
  sales: Array<SaleOrder>;
  salesperson: Worker;
  total: EstimateBreakdown;
};

export type GrossProfitRateSalesByPersonResponse = {
  __typename?: 'GrossProfitRateSalesByPersonResponse';
  salespersons: Array<GrossProfitRateSalesByPersonPerson>;
  total: EstimateBreakdown;
};

export type GrossProfitRateSalesFilters = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
  workerId?: InputMaybe<Scalars['Int']['input']>;
};

export type GrossProfitRateSalesResponse = {
  __typename?: 'GrossProfitRateSalesResponse';
  sales: Array<SaleOrder>;
  total: EstimateBreakdown;
};

export type Group = {
  __typename?: 'Group';
  accountingMethod: Scalars['String']['output'];
  companies: Array<Company>;
  country: Country;
  countryCode: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  dateFormat: Scalars['String']['output'];
  defaultAssociates: Array<Associate>;
  defaultTypeOfSales: Scalars['String']['output'];
  discountApprovalType: Scalars['String']['output'];
  discountDisplay: Scalars['String']['output'];
  discountType: Scalars['String']['output'];
  dontPrintAssociateTypes: Array<AssociateType>;
  downPaymentApprovalType: Scalars['String']['output'];
  estimateValidityDays: Scalars['Int']['output'];
  estimateValidityDaysType: Scalars['String']['output'];
  fiscalYearEnd: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  integrationId?: Maybe<Scalars['String']['output']>;
  invoiceNotes: Array<TextEditorContent>;
  invoiceTerms: Array<TextEditorContent>;
  leadQualifications: Array<LeadQualification>;
  leadTimes: Array<LeadTime>;
  leadTimesByItemClassification: Scalars['Boolean']['output'];
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  numberFormat: Scalars['String']['output'];
  persistDiscountRate: Scalars['Boolean']['output'];
  postSalesAtSupplierDays?: Maybe<Scalars['Int']['output']>;
  postSalesAwaitingInspectionDays?: Maybe<Scalars['Int']['output']>;
  postSalesDeliveredDays?: Maybe<Scalars['Int']['output']>;
  postSalesExecutiveApprovalDays?: Maybe<Scalars['Int']['output']>;
  postSalesFutureDeliveryDays?: Maybe<Scalars['Int']['output']>;
  postSalesInstallationDays?: Maybe<Scalars['Int']['output']>;
  postSalesInstalledPendingDays?: Maybe<Scalars['Int']['output']>;
  postSalesMeasurementDays?: Maybe<Scalars['Int']['output']>;
  postSalesPurchaseDays?: Maybe<Scalars['Int']['output']>;
  postSalesReadyToShipDays?: Maybe<Scalars['Int']['output']>;
  postSalesRevisionDays?: Maybe<Scalars['Int']['output']>;
  postSalesSalesApprovalDays?: Maybe<Scalars['Int']['output']>;
  postSalesTransitDays?: Maybe<Scalars['Int']['output']>;
  postSalesWarehouseDays?: Maybe<Scalars['Int']['output']>;
  printAssociates: Scalars['Boolean']['output'];
  projectNotes: Array<TextEditorContent>;
  projectQualifications: Array<ProjectQualification>;
  projectStages: Array<ProjectStage>;
  projectTerms: Array<TextEditorContent>;
  purchaseApprovalType: Scalars['String']['output'];
  roomLabel: Scalars['String']['output'];
  salesOrderApprovalType: Scalars['String']['output'];
  salesOrderNotes: Array<TextEditorContent>;
  salesOrderTerms: Array<TextEditorContent>;
  salesRevisionApprovalThreshold: Scalars['Float']['output'];
  salesRevisionApprovalType: Scalars['String']['output'];
  salespersonLabel: Scalars['String']['output'];
  transitStages: Array<TransitStage>;
  typesOfSales: Array<Scalars['String']['output']>;
  usesLeadsModule: Scalars['Boolean']['output'];
  usesProjectDesigner: Scalars['Boolean']['output'];
  usesTypesOfSales: Scalars['Boolean']['output'];
};

export type GroupUser = {
  __typename?: 'GroupUser';
  group: Group;
  id: Scalars['Int']['output'];
  lastActivity?: Maybe<Scalars['DateTime']['output']>;
  role: Role;
  user: User;
};

export type InactiveUser = {
  __typename?: 'InactiveUser';
  message: Scalars['String']['output'];
};

export type InvalidLoginInfo = {
  __typename?: 'InvalidLoginInfo';
  message: Scalars['String']['output'];
};

export type Inventory = {
  __typename?: 'Inventory';
  date: Scalars['Date']['output'];
  dimension1?: Maybe<Scalars['Float']['output']>;
  dimension2?: Maybe<Scalars['Float']['output']>;
  dimension3?: Maybe<Scalars['Float']['output']>;
  entry: Entry;
  id: Scalars['Int']['output'];
  items: Array<InventoryItem>;
  pieces: Scalars['Float']['output'];
  product: Product;
  quantity: Scalars['Float']['output'];
  totalPrice?: Maybe<Scalars['Float']['output']>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
  warehouse: Warehouse;
};

export type InventoryAllocation = {
  __typename?: 'InventoryAllocation';
  estimateEmbeddedItem?: Maybe<EstimateEmbeddedItem>;
  id: Scalars['Int']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  product: Product;
  project?: Maybe<Project>;
  quantity: Scalars['Float']['output'];
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  dimension1?: Maybe<Scalars['Float']['output']>;
  dimension2?: Maybe<Scalars['Float']['output']>;
  dimension3?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  pieces: Scalars['Int']['output'];
  product: Product;
  quantity: Scalars['Float']['output'];
  warehouse: Warehouse;
};

export type InventoryTransaction = Transaction & {
  __typename?: 'InventoryTransaction';
  amount: Scalars['Float']['output'];
  date: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  documentNo?: Maybe<Scalars['String']['output']>;
  entries: Array<Entry>;
  files: Array<TransactionFile>;
  history: Array<TransactionHistory>;
  id: Scalars['Int']['output'];
  inventory: Array<Inventory>;
  isVoid: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  sequenceNo?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type InvitationDeclined = {
  __typename?: 'InvitationDeclined';
  message: Scalars['String']['output'];
};

export type ItemClassification = {
  __typename?: 'ItemClassification';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Journal = {
  __typename?: 'Journal';
  id: Scalars['Int']['output'];
};

export type JournalFilters = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LeadQualification = {
  __typename?: 'LeadQualification';
  colorIndex: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export type LeadTime = {
  __typename?: 'LeadTime';
  afterDateOf: Scalars['String']['output'];
  companies: Array<Company>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  itemClassification?: Maybe<ItemClassification>;
  time1: Scalars['Int']['output'];
  time2?: Maybe<Scalars['Int']['output']>;
  timeUnit: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type LockedUser = {
  __typename?: 'LockedUser';
  message: Scalars['String']['output'];
};

export type LoginResponse = AuthPayload | CompanySelection | InactiveUser | InvalidLoginInfo | LockedUser;

export type LossReason = {
  __typename?: 'LossReason';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  specialReason?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type MobileDashboard = {
  __typename?: 'MobileDashboard';
  activeEstimatesTotal: Scalars['Float']['output'];
  approvalThisWeekTotal: Scalars['Float']['output'];
  lastTwelveMonths: Array<Scalars['Float']['output']>;
  monthsNumberOfSales: Scalars['Int']['output'];
  monthsSalesTotal: Scalars['Float']['output'];
  numberOfActiveEstimates: Scalars['Int']['output'];
  numberOfApprovalThisWeek: Scalars['Int']['output'];
  yearsNumberOfSales: Scalars['Int']['output'];
  yearsSalesTotal: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authorizeDiscount: Estimate;
  changeOwnPassword: User;
  changeUserPassword: User;
  chooseCompany: LoginResponse;
  cloneEstimate: Estimate;
  createAccount: Account;
  createAssociate: Associate;
  createAssociateType: AssociateType;
  createBankingAccount: Account;
  createBonusProfile: BonusProfile;
  createBrisaChildProduct: Product;
  createBuilding: Building;
  createCheckPayablePayments: Scalars['Boolean']['output'];
  createCheckReceivableDeposit: Scalars['Boolean']['output'];
  createChildProduct: CreateChildProductResponse;
  createCommissionProfile: CommissionProfile;
  createCompany: Company;
  createCompetitor: Competitor;
  createCreditCardPayment: Transaction;
  createCreditCardTerm: CreateCreditCardTermResponse;
  createCustomer: Customer;
  createCustomerSource: CustomerSource;
  createEmbeddedItem: CreateEmbeddedItemResponse;
  createEmbeddedItemAndChildProduct: CreateEmbeddedItemAndChildProductResponse;
  createEntryClearing: Entry;
  createEstimate: Estimate;
  createEstimateItem: CreateEstimateItemResponse;
  createEstimateItemAndChildProduct: CreateEstimateItemAndChildProductResponse;
  createEstimateSubItem: CreateEstimateSubItemResponse;
  createEstimateSubItemAndChildProduct: CreateEstimateSubItemAndChildProductResponse;
  createExpense: Transaction;
  createExternalProduct: CreateExternalProductResponse;
  createFinancingTerm: CreateFinancingTermResponse;
  createGroupItem: CreateGroupItemResponse;
  createIncome: Transaction;
  createInventoryQuantityAdjustment: Transaction;
  createItemClassification: ItemClassification;
  createLossReason: LossReason;
  createMoneyInTransitDeposit: Scalars['Boolean']['output'];
  createParentProduct: CreateParentProductResponse;
  createPartnerSupplier: PartnerSupplier;
  createPayable: Payable;
  createPayablePayment: Scalars['Boolean']['output'];
  createPaymentMethod: CreatePaymentMethodResponse;
  createPosition: Position;
  createPriceList: PriceList;
  createProductGroup: CreateProductGroupResponse;
  createProductTag: ProductTag;
  createProject: Project;
  createProjectRoom: ProjectRoom;
  createPurchaseOrder: PurchaseOrder;
  createReceivable: Receivable;
  createReceivablePayment: Scalars['Boolean']['output'];
  createRole: Role;
  createSaleOrder: Project;
  createSalesAgreement: SalesAgreement;
  createSalesTax: SalesTax;
  createService: CreateServiceResponse;
  createStagesTerm: CreateStagesTermResponse;
  createStandardProduct: CreateStandardProductResponse;
  createTeam: CreateTeamResponse;
  createTemplateEstimateEmbeddedItem: CreateTemplateEstimateEmbeddedItemResponse;
  createTemplateEstimateItem: CreateTemplateEstimateItemResponse;
  createTemplateProduct: CreateTemplateProductResponse;
  createTerm: CreateTermResponse;
  createTrader: Trader;
  createTransactionHistoryComment: Transaction;
  createTransfer: Transaction;
  createUser: CreateUserResponse;
  createVariation: Variation;
  createVariationOption: CreateVariationOptionResponse;
  createVendor: Vendor;
  createVendorLandedCost: Vendor;
  createVendorPaymentTerm: CreateVendorPaymentTermInstallmentsResponse;
  createVendorPriceGroup: VendorPriceGroup;
  createWarehouse: Warehouse;
  createWarehouseLocation: Warehouse;
  createWorker: CreateWorkerResponse;
  deleteAccount: DeleteAccountResponse;
  deleteAssociate: DeleteAssociateResponse;
  deleteAssociateType: DeleteAssociateTypeResponse;
  deleteBonusProfile: DeleteBonusProfileResponse;
  deleteCommissionProfile: DeleteCommissionProfileResponse;
  deleteDepositTransaction: Entry;
  deleteEntryClearing: Entry;
  deleteEstimate: DeleteResponse;
  deleteEstimateEmbeddedItem: DeleteEstimateEmbeddedItemResponse;
  deleteEstimateItem: DeleteEstimateItemResponse;
  deletePayablePayments: DeletePayablePaymentsResponse;
  deletePayables: DeleteResponse;
  deletePaymentMethod: DeletePaymentMethodResponse;
  deletePosition: DeletePositionResponse;
  deletePriceList: DeleteResponse;
  deleteProductGroup: DeleteResponse;
  deleteProject: DeleteResponse;
  deleteReceivablePayments: DeleteReceivablePaymentsResponse;
  deleteReceivables: DeleteResponse;
  deleteRole: DeleteRoleResponse;
  deleteTeam: Scalars['Boolean']['output'];
  deleteTerm: DeleteTermResponse;
  deleteTransactionHistoryComment: Transaction;
  deleteTransactions: DeleteResponse;
  deleteUser: DeleteUserResponse;
  deleteVendorLandedCost: Vendor;
  deleteWarehouseLocation: DeleteWarehouseLocationResponse;
  deleteWorker: DeleteWorkerResponse;
  duplicateRole: Role;
  editAccount: Account;
  editAssociate: Associate;
  editAssociateType: AssociateType;
  editBankSlipReceivable: Receivable;
  editBankingAccount: Account;
  editBonusProfile: BonusProfile;
  editBuilding: Building;
  editCheckPayable: Payable;
  editCheckReceivable: Receivable;
  editChildProduct: EditChildProductResponse;
  editCommissionProfile: CommissionProfile;
  editCompaniesDefaultMarkup: Array<Company>;
  editCompetitor: Competitor;
  editCreditCardPayment: Transaction;
  editCreditCardTerm: EditCreditCardTermResponse;
  editCustomer: Customer;
  editCustomerSource: CustomerSource;
  editEntryClearing: Entry;
  editEstimateDeliveryService: Estimate;
  editEstimateDepositPercentage: Estimate;
  editEstimateDiscount: Estimate;
  editEstimateEmbeddedItemServiceBasePrice: EditEstimateEmbeddedItemServiceBasePriceResponse;
  editEstimateInstallationService: Estimate;
  editEstimateInstallationServiceAmount: Estimate;
  editEstimateInstallmentAmount: Estimate;
  editEstimateInstallmentDueDate: Estimate;
  editEstimateInstallmentPaymentMethod: Estimate;
  editEstimateInstallmentsRemarks: Estimate;
  editEstimateItemDelivery: Project;
  editEstimateItemDescription: EstimateItem;
  editEstimateItemDiscount: EditEstimateItemDiscountResponse;
  editEstimateItemImage: EstimateItem;
  editEstimateItemName: EstimateItem;
  editEstimateItemOriginalPrice: EditEstimateItemOriginalPriceResponse;
  editEstimateItemPricePerUnit: EditEstimateItemPricePerUnitResponse;
  editEstimateItemQuantity: EditEstimateItemQuantityResponse;
  editEstimateItemRoom: EstimateItem;
  editEstimateItemSpecifications: EstimateItem;
  editEstimateName: Estimate;
  editEstimateNumberOfInstallments: Estimate;
  editEstimatePrice: Estimate;
  editEstimateRequiresDeposit: Estimate;
  editEstimateSalesTax: Estimate;
  editEstimateTerm: Estimate;
  editExpense: Transaction;
  editExternalProduct: EditExternalProductResponse;
  editFinancingTerm: EditFinancingTermResponse;
  editGroupItemDiscount: EditGroupItemDiscountResponse;
  editGroupItemPricePerUnit: EditGroupItemPricePerUnitResponse;
  editIncome: Transaction;
  editLossReason: LossReason;
  editMoneyInTransitReceivable: Receivable;
  editParentProduct: EditParentProductResponse;
  editPartnerSupplier: PartnerSupplier;
  editPayable: EditPayableResponse;
  editPayablePayment: Scalars['Boolean']['output'];
  editPaymentMethod: EditPaymentMethodResponse;
  editPosition: Position;
  editPriceList: PriceList;
  editProductGroup: ProductGroup;
  editProductOpeningInventory: Product;
  editProfile: EditProfileResponse;
  editProjectBillingAddressInfo: Project;
  editProjectCustomerInfo: Project;
  editProjectDelivery: Project;
  editProjectFormFooterDetails: Project;
  editProjectFormNotes: Project;
  editProjectFormTerms: Project;
  editProjectInfo: Project;
  editProjectShippingInfo: Project;
  editProjectStage: Project;
  editPurchaseOrder: PurchaseOrder;
  editReceivable: Receivable;
  editReceivablePayment: Scalars['Boolean']['output'];
  editRole: Role;
  editSalesAgreement: SalesAgreement;
  editSalesOrderDate: SaleOrder;
  editSalesTax: SalesTax;
  editService: EditServiceResponse;
  editSettingsCompany: Company;
  editSettingsDiscount: EditSettingsDiscountResponse;
  editSettingsDownPaymentApproval: EditSettingsDownPaymentApprovalResponse;
  editSettingsGeneral: Group;
  editSettingsInvoices: Group;
  editSettingsLeadTime: Group;
  editSettingsLeads: Group;
  editSettingsOrganizationProfile: Group;
  editSettingsPostSalesStages: Group;
  editSettingsProjectStage: Group;
  editSettingsProjects: Group;
  editSettingsPurchaseApproval: EditSettingsPurchaseApprovalResponse;
  editSettingsSalesOrderApproval: EditSettingsSalesOrderApprovalResponse;
  editSettingsSalesOrders: Group;
  editSettingsSalesRevisionApproval: EditSettingsSalesRevisionApprovalResponse;
  editStagesTerm: EditStagesTermResponse;
  editStandardProduct: EditStandardProductResponse;
  editTeam: EditTeamResponse;
  editTemplateProduct: EditTemplateProductResponse;
  editTerm: EditTermResponse;
  editTrader: Trader;
  editTransactionFiles: Transaction;
  editTransfer: Transaction;
  editUser: EditUserResponse;
  editVariation: Variation;
  editVariationOption: EditVariationOptionResponse;
  editVendor: Vendor;
  editVendorDefaultMarkup: Vendor;
  editVendorLandedCost: VendorLandedCost;
  editVendorLeadTime: Vendor;
  editVendorPriceGroup: VendorPriceGroup;
  editVendorUsesPriceGroup: Vendor;
  editWarehouse: Warehouse;
  editWarehouseLocation: WarehouseLocation;
  editWorker: EditWorkerResponse;
  importBrisaProduct: Scalars['Boolean']['output'];
  login: LoginResponse;
  logout: Scalars['Boolean']['output'];
  nextInvoiceNumber: Scalars['Int']['output'];
  receiveSalesOrderDeposit: SaleOrder;
  replaceEmbeddedItem: EstimateItem;
  replaceEmbeddedItemAndCreateChildProduct: EstimateItem;
  requestDiscountAuthorization: Estimate;
  resetRevision: Project;
  sendEstimate: Estimate;
  sendPurchaseOrder: PurchaseOrder;
  sendVendorProductRequest: Scalars['Boolean']['output'];
  setAccountStatus: Account;
  setAssociateStatus: Associate;
  setAssociateTypeStatus: AssociateType;
  setBuildingStatus: Building;
  setCompanyStatus: Company;
  setCompetitorStatus: Competitor;
  setCustomerSourceStatus: CustomerSource;
  setCustomerStatus: Customer;
  setDefaultTerm: Term;
  setDefaultWarehouse: Warehouse;
  setEntryReconciliation: Entry;
  setFavoriteEstimate: Project;
  setGroupUserRole: GroupUser;
  setLossReasonStatus: LossReason;
  setPaymentMethodStatus: PaymentMethod;
  setPositionStatus: Position;
  setProductStatus: Product;
  setProjectHideDiscount: Project;
  setProjectStatus: Project;
  setPurchaseOrderStatus: PurchaseOrder;
  setRolePermission: Role;
  setSaleOrderStatus: SaleOrder;
  setSalesTaxStatus: SalesTax;
  setTeamStatus: Team;
  setTermStatus: Term;
  setUserStatus: User;
  setVariationOptionStatus: VariationOption;
  setVariationStatus: Variation;
  setVendorPriceGroupStatus: VendorPriceGroup;
  setVendorStatus: Vendor;
  setWarehouseStatus: Warehouse;
  setWorkerStatus: Worker;
  signS3: Array<S3Payload>;
  signS3Multiple: Array<S3Payload>;
  signUp: SignUpResponse;
  switchCompanies: Scalars['String']['output'];
  undeleteEstimateItem: Estimate;
  voidPayables: Array<Payable>;
  voidReceivables: Array<Receivable>;
  writeOffPayableInstallments: Payable;
  writeOffReceivableInstallments: Receivable;
};


export type MutationAuthorizeDiscountArgs = {
  input: AuthorizeDiscountInput;
};


export type MutationChangeOwnPasswordArgs = {
  input: ChangeOwnPasswordInput;
};


export type MutationChangeUserPasswordArgs = {
  input: ChangeUserPasswordInput;
};


export type MutationChooseCompanyArgs = {
  input: ChooseCompanyInput;
};


export type MutationCloneEstimateArgs = {
  input: CloneEstimateInput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateAssociateArgs = {
  input: CreateAssociateInput;
};


export type MutationCreateAssociateTypeArgs = {
  input: CreateAssociateTypeInput;
};


export type MutationCreateBankingAccountArgs = {
  input: CreateBankingAccountInput;
};


export type MutationCreateBonusProfileArgs = {
  input: CreateBonusProfileInput;
};


export type MutationCreateBrisaChildProductArgs = {
  input: CreateBrisaChildProductInput;
};


export type MutationCreateBuildingArgs = {
  input: CreateBuildingInput;
};


export type MutationCreateCheckPayablePaymentsArgs = {
  input: CreateCheckPayablePaymentsInput;
};


export type MutationCreateCheckReceivableDepositArgs = {
  input: CreateCheckReceivableDepositInput;
};


export type MutationCreateChildProductArgs = {
  input: CreateChildProductInput;
};


export type MutationCreateCommissionProfileArgs = {
  input: CreateCommissionProfileInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateCompetitorArgs = {
  input: CreateCompetitorInput;
};


export type MutationCreateCreditCardPaymentArgs = {
  input: CreateCreditCardPaymentInput;
};


export type MutationCreateCreditCardTermArgs = {
  input: CreateCreditCardTermInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateCustomerSourceArgs = {
  input: CreateCustomerSourceInput;
};


export type MutationCreateEmbeddedItemArgs = {
  input: CreateEmbeddedItemInput;
};


export type MutationCreateEmbeddedItemAndChildProductArgs = {
  input: CreateEmbeddedItemAndChildProductInput;
};


export type MutationCreateEntryClearingArgs = {
  input: CreateEntryClearingInput;
};


export type MutationCreateEstimateArgs = {
  input: CreateEstimateInput;
};


export type MutationCreateEstimateItemArgs = {
  input: CreateEstimateItemInput;
};


export type MutationCreateEstimateItemAndChildProductArgs = {
  input: CreateEstimateItemAndChildProductInput;
};


export type MutationCreateEstimateSubItemArgs = {
  input: CreateEstimateSubItemInput;
};


export type MutationCreateEstimateSubItemAndChildProductArgs = {
  input: CreateEstimateSubItemAndChildProductInput;
};


export type MutationCreateExpenseArgs = {
  input: CreateExpenseInput;
};


export type MutationCreateExternalProductArgs = {
  input: CreateExternalProductInput;
};


export type MutationCreateFinancingTermArgs = {
  input: CreateFinancingTermInput;
};


export type MutationCreateGroupItemArgs = {
  input: CreateGroupItemInput;
};


export type MutationCreateIncomeArgs = {
  input: CreateIncomeInput;
};


export type MutationCreateInventoryQuantityAdjustmentArgs = {
  input: CreateInventoryQuantityAdjustmentInput;
};


export type MutationCreateItemClassificationArgs = {
  input: CreateItemClassificationInput;
};


export type MutationCreateLossReasonArgs = {
  input: CreateLossReasonInput;
};


export type MutationCreateMoneyInTransitDepositArgs = {
  input: CreateMoneyInTransitDepositInput;
};


export type MutationCreateParentProductArgs = {
  input: CreateParentProductInput;
};


export type MutationCreatePartnerSupplierArgs = {
  input: CreatePartnerSupplierInput;
};


export type MutationCreatePayableArgs = {
  input: CreatePayableInput;
};


export type MutationCreatePayablePaymentArgs = {
  input: CreatePayablePaymentInput;
};


export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};


export type MutationCreatePositionArgs = {
  input: CreatePositionInput;
};


export type MutationCreatePriceListArgs = {
  input: CreatePriceListInput;
};


export type MutationCreateProductGroupArgs = {
  input: CreateProductGroupInput;
};


export type MutationCreateProductTagArgs = {
  input: CreateProductTagInput;
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


export type MutationCreateProjectRoomArgs = {
  input: CreateProjectRoomInput;
};


export type MutationCreatePurchaseOrderArgs = {
  input: CreatePurchaseOrderInput;
};


export type MutationCreateReceivableArgs = {
  input: CreateReceivableInput;
};


export type MutationCreateReceivablePaymentArgs = {
  input: CreateReceivablePaymentInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSaleOrderArgs = {
  input: CreateSaleOrderInput;
};


export type MutationCreateSalesAgreementArgs = {
  input: CreateSalesAgreementInput;
};


export type MutationCreateSalesTaxArgs = {
  input: CreateSalesTaxInput;
};


export type MutationCreateServiceArgs = {
  input: CreateServiceInput;
};


export type MutationCreateStagesTermArgs = {
  input: CreateStagesTermInput;
};


export type MutationCreateStandardProductArgs = {
  input: CreateStandardProductInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationCreateTemplateEstimateEmbeddedItemArgs = {
  input: CreateTemplateEstimateEmbeddedItemInput;
};


export type MutationCreateTemplateEstimateItemArgs = {
  input: CreateTemplateEstimateItemInput;
};


export type MutationCreateTemplateProductArgs = {
  input: CreateTemplateProductInput;
};


export type MutationCreateTermArgs = {
  input: CreateTermInput;
};


export type MutationCreateTraderArgs = {
  input: CreateTraderInput;
};


export type MutationCreateTransactionHistoryCommentArgs = {
  input: CreateTransactionHistoryCommentInput;
};


export type MutationCreateTransferArgs = {
  input: CreateTransferInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateVariationArgs = {
  input: CreateVariationInput;
};


export type MutationCreateVariationOptionArgs = {
  input: CreateVariationOptionInput;
};


export type MutationCreateVendorArgs = {
  input: CreateVendorInput;
};


export type MutationCreateVendorLandedCostArgs = {
  input: CreateVendorLandedCostInput;
};


export type MutationCreateVendorPaymentTermArgs = {
  input: CreateVendorPaymentTermInput;
};


export type MutationCreateVendorPriceGroupArgs = {
  input: CreateVendorPriceGroupInput;
};


export type MutationCreateWarehouseArgs = {
  input: CreateWarehouseInput;
};


export type MutationCreateWarehouseLocationArgs = {
  input: CreateWarehouseLocationInput;
};


export type MutationCreateWorkerArgs = {
  input: CreateWorkerInput;
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput;
};


export type MutationDeleteAssociateArgs = {
  input: DeleteAssociateInput;
};


export type MutationDeleteAssociateTypeArgs = {
  input: DeleteAssociateTypeInput;
};


export type MutationDeleteBonusProfileArgs = {
  input: DeleteBonusProfileInput;
};


export type MutationDeleteCommissionProfileArgs = {
  input: DeleteCommissionProfileInput;
};


export type MutationDeleteDepositTransactionArgs = {
  input: DeleteDepositTransactionInput;
};


export type MutationDeleteEntryClearingArgs = {
  input: DeleteEntryClearingInput;
};


export type MutationDeleteEstimateArgs = {
  input: DeleteEstimateInput;
};


export type MutationDeleteEstimateEmbeddedItemArgs = {
  input: DeleteEstimateEmbeddedItemInput;
};


export type MutationDeleteEstimateItemArgs = {
  input: DeleteEstimateItemInput;
};


export type MutationDeletePayablePaymentsArgs = {
  input: DeletePayablePaymentsInput;
};


export type MutationDeletePayablesArgs = {
  input: DeletePayablesInput;
};


export type MutationDeletePaymentMethodArgs = {
  input: DeletePaymentMethodInput;
};


export type MutationDeletePositionArgs = {
  input: DeletePositionInput;
};


export type MutationDeletePriceListArgs = {
  input: DeletePriceListInput;
};


export type MutationDeleteProductGroupArgs = {
  input: DeleteProductGroupInput;
};


export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


export type MutationDeleteReceivablePaymentsArgs = {
  input: DeleteReceivablePaymentsInput;
};


export type MutationDeleteReceivablesArgs = {
  input: DeleteReceivablesInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


export type MutationDeleteTermArgs = {
  input: DeleteTermInput;
};


export type MutationDeleteTransactionHistoryCommentArgs = {
  input: DeleteTransactionHistoryCommentInput;
};


export type MutationDeleteTransactionsArgs = {
  input: DeleteTransactionsInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteVendorLandedCostArgs = {
  input: DeleteVendorLandedCostInput;
};


export type MutationDeleteWarehouseLocationArgs = {
  input: DeleteWarehouseLocationInput;
};


export type MutationDeleteWorkerArgs = {
  input: DeleteWorkerInput;
};


export type MutationDuplicateRoleArgs = {
  input: DuplicateRoleInput;
};


export type MutationEditAccountArgs = {
  input: EditAccountInput;
};


export type MutationEditAssociateArgs = {
  input: EditAssociateInput;
};


export type MutationEditAssociateTypeArgs = {
  input: EditAssociateTypeInput;
};


export type MutationEditBankSlipReceivableArgs = {
  input: EditBankSlipReceivableInput;
};


export type MutationEditBankingAccountArgs = {
  input: EditBankingAccountInput;
};


export type MutationEditBonusProfileArgs = {
  input: EditBonusProfileInput;
};


export type MutationEditBuildingArgs = {
  input: EditBuildingInput;
};


export type MutationEditCheckPayableArgs = {
  input: EditCheckPayableInput;
};


export type MutationEditCheckReceivableArgs = {
  input: EditCheckReceivableInput;
};


export type MutationEditChildProductArgs = {
  input: EditChildProductInput;
};


export type MutationEditCommissionProfileArgs = {
  input: EditCommissionProfileInput;
};


export type MutationEditCompaniesDefaultMarkupArgs = {
  input: EditCompaniesDefaultMarkupInput;
};


export type MutationEditCompetitorArgs = {
  input: EditCompetitorInput;
};


export type MutationEditCreditCardPaymentArgs = {
  input: EditCreditCardPaymentInput;
};


export type MutationEditCreditCardTermArgs = {
  input: EditCreditCardTermInput;
};


export type MutationEditCustomerArgs = {
  input: EditCustomerInput;
};


export type MutationEditCustomerSourceArgs = {
  input: EditCustomerSourceInput;
};


export type MutationEditEntryClearingArgs = {
  input: EditEntryClearingInput;
};


export type MutationEditEstimateDeliveryServiceArgs = {
  input: EditEstimateDeliveryServiceInput;
};


export type MutationEditEstimateDepositPercentageArgs = {
  input: EditEstimateDepositPercentageInput;
};


export type MutationEditEstimateDiscountArgs = {
  input: EditEstimateDiscountInput;
};


export type MutationEditEstimateEmbeddedItemServiceBasePriceArgs = {
  input: EditEstimateEmbeddedItemServiceBasePriceInput;
};


export type MutationEditEstimateInstallationServiceArgs = {
  input: EditEstimateInstallationServiceInput;
};


export type MutationEditEstimateInstallationServiceAmountArgs = {
  input: EditEstimateInstallationServiceAmountInput;
};


export type MutationEditEstimateInstallmentAmountArgs = {
  input: EditEstimateInstallmentAmountInput;
};


export type MutationEditEstimateInstallmentDueDateArgs = {
  input: EditEstimateInstallmentDueDateInput;
};


export type MutationEditEstimateInstallmentPaymentMethodArgs = {
  input: EditEstimateInstallmentPaymentMethodInput;
};


export type MutationEditEstimateInstallmentsRemarksArgs = {
  input: Array<EditEstimateInstallmentsRemarksInput>;
};


export type MutationEditEstimateItemDeliveryArgs = {
  input: EditEstimateItemDeliveryInput;
};


export type MutationEditEstimateItemDescriptionArgs = {
  input: EditEstimateItemDescriptionInput;
};


export type MutationEditEstimateItemDiscountArgs = {
  input: EditEstimateItemDiscountInput;
};


export type MutationEditEstimateItemImageArgs = {
  input: EditEstimateItemImageInput;
};


export type MutationEditEstimateItemNameArgs = {
  input: EditEstimateItemNameInput;
};


export type MutationEditEstimateItemOriginalPriceArgs = {
  input: EditEstimateItemOriginalPriceInput;
};


export type MutationEditEstimateItemPricePerUnitArgs = {
  input: EditEstimateItemPricePerUnitInput;
};


export type MutationEditEstimateItemQuantityArgs = {
  input: EditEstimateItemQuantityInput;
};


export type MutationEditEstimateItemRoomArgs = {
  input: EditEstimateItemRoomInput;
};


export type MutationEditEstimateItemSpecificationsArgs = {
  input: EditEstimateItemSpecificationsInput;
};


export type MutationEditEstimateNameArgs = {
  input: EditEstimateNameInput;
};


export type MutationEditEstimateNumberOfInstallmentsArgs = {
  input: EditEstimateNumberOfInstallmentsInput;
};


export type MutationEditEstimatePriceArgs = {
  input: EditEstimatePriceInput;
};


export type MutationEditEstimateRequiresDepositArgs = {
  input: EditEstimateRequiresDepositInput;
};


export type MutationEditEstimateSalesTaxArgs = {
  input: EditEstimateSalesTaxInput;
};


export type MutationEditEstimateTermArgs = {
  input: EditEstimateTermInput;
};


export type MutationEditExpenseArgs = {
  input: EditExpenseInput;
};


export type MutationEditExternalProductArgs = {
  input: EditExternalProductInput;
};


export type MutationEditFinancingTermArgs = {
  input: EditFinancingTermInput;
};


export type MutationEditGroupItemDiscountArgs = {
  input: EditGroupItemDiscountInput;
};


export type MutationEditGroupItemPricePerUnitArgs = {
  input: EditGroupItemPricePerUnitInput;
};


export type MutationEditIncomeArgs = {
  input: EditIncomeInput;
};


export type MutationEditLossReasonArgs = {
  input: EditLossReasonInput;
};


export type MutationEditMoneyInTransitReceivableArgs = {
  input: EditMoneyInTransitReceivableInput;
};


export type MutationEditParentProductArgs = {
  input: EditParentProductInput;
};


export type MutationEditPartnerSupplierArgs = {
  input: EditPartnerSupplierInput;
};


export type MutationEditPayableArgs = {
  input: EditPayableInput;
};


export type MutationEditPayablePaymentArgs = {
  input: EditPayablePaymentInput;
};


export type MutationEditPaymentMethodArgs = {
  input: EditPaymentMethodInput;
};


export type MutationEditPositionArgs = {
  input: EditPositionInput;
};


export type MutationEditPriceListArgs = {
  input: EditPriceListInput;
};


export type MutationEditProductGroupArgs = {
  input: EditProductGroupInput;
};


export type MutationEditProductOpeningInventoryArgs = {
  input: EditProductOpeningInventoryInput;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationEditProjectBillingAddressInfoArgs = {
  input: EditProjectBillingAddressInfoInput;
};


export type MutationEditProjectCustomerInfoArgs = {
  input: EditProjectCustomerInfoInput;
};


export type MutationEditProjectDeliveryArgs = {
  input: EditProjectDeliveryInput;
};


export type MutationEditProjectFormFooterDetailsArgs = {
  input: EditProjectFormFooterDetailsInput;
};


export type MutationEditProjectFormNotesArgs = {
  input: EditProjectFormNotesInput;
};


export type MutationEditProjectFormTermsArgs = {
  input: EditProjectFormTermsInput;
};


export type MutationEditProjectInfoArgs = {
  input: EditProjectInfoInput;
};


export type MutationEditProjectShippingInfoArgs = {
  input: EditProjectShippingInfoInput;
};


export type MutationEditProjectStageArgs = {
  input: EditProjectStageInput;
};


export type MutationEditPurchaseOrderArgs = {
  input: EditPurchaseOrderInput;
};


export type MutationEditReceivableArgs = {
  input: EditReceivableInput;
};


export type MutationEditReceivablePaymentArgs = {
  input: EditReceivablePaymentInput;
};


export type MutationEditRoleArgs = {
  input: EditRoleInput;
};


export type MutationEditSalesAgreementArgs = {
  input: EditSalesAgreementInput;
};


export type MutationEditSalesOrderDateArgs = {
  input: EditSalesOrderDateInput;
};


export type MutationEditSalesTaxArgs = {
  input: EditSalesTaxInput;
};


export type MutationEditServiceArgs = {
  input: EditServiceInput;
};


export type MutationEditSettingsCompanyArgs = {
  input: EditSettingsCompanyInput;
};


export type MutationEditSettingsDiscountArgs = {
  input: EditSettingsDiscountInput;
};


export type MutationEditSettingsDownPaymentApprovalArgs = {
  input: EditSettingsDownPaymentApprovalInput;
};


export type MutationEditSettingsGeneralArgs = {
  input: EditSettingsGeneralInput;
};


export type MutationEditSettingsInvoicesArgs = {
  input: EditSettingsInvoicesInput;
};


export type MutationEditSettingsLeadTimeArgs = {
  input: EditSettingsLeadTimeInput;
};


export type MutationEditSettingsLeadsArgs = {
  input: EditSettingsLeadsInput;
};


export type MutationEditSettingsOrganizationProfileArgs = {
  input: EditSettingsOrganizationProfileInput;
};


export type MutationEditSettingsPostSalesStagesArgs = {
  input: EditSettingsPostSalesStagesInput;
};


export type MutationEditSettingsProjectStageArgs = {
  input: EditSettingsProjectStageInput;
};


export type MutationEditSettingsProjectsArgs = {
  input: EditSettingsProjectsInput;
};


export type MutationEditSettingsPurchaseApprovalArgs = {
  input: EditSettingsPurchaseApprovalInput;
};


export type MutationEditSettingsSalesOrderApprovalArgs = {
  input: EditSettingsSalesOrderApprovalInput;
};


export type MutationEditSettingsSalesOrdersArgs = {
  input: EditSettingsSalesOrdersInput;
};


export type MutationEditSettingsSalesRevisionApprovalArgs = {
  input: EditSettingsSalesRevisionApprovalInput;
};


export type MutationEditStagesTermArgs = {
  input: EditStagesTermInput;
};


export type MutationEditStandardProductArgs = {
  input: EditStandardProductInput;
};


export type MutationEditTeamArgs = {
  input: EditTeamInput;
};


export type MutationEditTemplateProductArgs = {
  input: EditTemplateProductInput;
};


export type MutationEditTermArgs = {
  input: EditTermInput;
};


export type MutationEditTraderArgs = {
  input: EditTraderInput;
};


export type MutationEditTransactionFilesArgs = {
  input: EditTransactionFilesInput;
};


export type MutationEditTransferArgs = {
  input: EditTransferInput;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationEditVariationArgs = {
  input: EditVariationInput;
};


export type MutationEditVariationOptionArgs = {
  input: EditVariationOptionInput;
};


export type MutationEditVendorArgs = {
  input: EditVendorInput;
};


export type MutationEditVendorDefaultMarkupArgs = {
  input: EditVendorDefaultMarkupInput;
};


export type MutationEditVendorLandedCostArgs = {
  input: EditVendorLandedCostInput;
};


export type MutationEditVendorLeadTimeArgs = {
  input: EditVendorLeadTimeInput;
};


export type MutationEditVendorPriceGroupArgs = {
  input: EditVendorPriceGroupInput;
};


export type MutationEditVendorUsesPriceGroupArgs = {
  input: EditVendorUsesPriceGroupInput;
};


export type MutationEditWarehouseArgs = {
  input: EditWarehouseInput;
};


export type MutationEditWarehouseLocationArgs = {
  input: EditWarehouseLocationInput;
};


export type MutationEditWorkerArgs = {
  input: EditWorkerInput;
};


export type MutationImportBrisaProductArgs = {
  input: ImportBrisaProductInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationNextInvoiceNumberArgs = {
  input: NextInvoiceNumberInput;
};


export type MutationReceiveSalesOrderDepositArgs = {
  input: ReceiveSalesOrderDepositInput;
};


export type MutationReplaceEmbeddedItemArgs = {
  input: ReplaceEmbeddedItemInput;
};


export type MutationReplaceEmbeddedItemAndCreateChildProductArgs = {
  input: ReplaceEmbeddedItemAndCreateChildProductInput;
};


export type MutationRequestDiscountAuthorizationArgs = {
  input: RequestDiscountAuthorizationInput;
};


export type MutationResetRevisionArgs = {
  input: ResetRevisionInput;
};


export type MutationSendEstimateArgs = {
  input: SendEstimateInput;
};


export type MutationSendPurchaseOrderArgs = {
  input: SendPurchaseOrderInput;
};


export type MutationSendVendorProductRequestArgs = {
  input: SendVendorProductRequestInput;
};


export type MutationSetAccountStatusArgs = {
  input: SetAccountStatusInput;
};


export type MutationSetAssociateStatusArgs = {
  input: SetAssociateStatusInput;
};


export type MutationSetAssociateTypeStatusArgs = {
  input: SetAssociateTypeStatusInput;
};


export type MutationSetBuildingStatusArgs = {
  input: SetBuildingStatusInput;
};


export type MutationSetCompanyStatusArgs = {
  input: SetCompanyStatusInput;
};


export type MutationSetCompetitorStatusArgs = {
  input: SetCompetitorStatusInput;
};


export type MutationSetCustomerSourceStatusArgs = {
  input: SetCustomerSourceStatusInput;
};


export type MutationSetCustomerStatusArgs = {
  input: SetCustomerStatusInput;
};


export type MutationSetDefaultTermArgs = {
  input: SetDefaultTermInput;
};


export type MutationSetDefaultWarehouseArgs = {
  input: SetDefaultWarehouseInput;
};


export type MutationSetEntryReconciliationArgs = {
  input: SetEntryReconciliationInput;
};


export type MutationSetFavoriteEstimateArgs = {
  input: SetFavoriteEstimateInput;
};


export type MutationSetGroupUserRoleArgs = {
  input: SetGroupUserRoleInput;
};


export type MutationSetLossReasonStatusArgs = {
  input: SetLossReasonStatusInput;
};


export type MutationSetPaymentMethodStatusArgs = {
  input: SetPaymentMethodStatusInput;
};


export type MutationSetPositionStatusArgs = {
  input: SetPositionStatusInput;
};


export type MutationSetProductStatusArgs = {
  input: SetProductStatusInput;
};


export type MutationSetProjectHideDiscountArgs = {
  input: SetProjectHideDiscountInput;
};


export type MutationSetProjectStatusArgs = {
  input: SetProjectStatusInput;
};


export type MutationSetPurchaseOrderStatusArgs = {
  input: SetPurchaseOrderStatusInput;
};


export type MutationSetRolePermissionArgs = {
  input: SetRolePermissionInput;
};


export type MutationSetSaleOrderStatusArgs = {
  input: SetSaleOrderStatusInput;
};


export type MutationSetSalesTaxStatusArgs = {
  input: SetSalesTaxStatusInput;
};


export type MutationSetTeamStatusArgs = {
  input: SetTeamStatusInput;
};


export type MutationSetTermStatusArgs = {
  input: SetTermStatusInput;
};


export type MutationSetUserStatusArgs = {
  input: SetUserStatusInput;
};


export type MutationSetVariationOptionStatusArgs = {
  input: SetVariationOptionStatusInput;
};


export type MutationSetVariationStatusArgs = {
  input: SetVariationStatusInput;
};


export type MutationSetVendorPriceGroupStatusArgs = {
  input: SetVendorPriceGroupStatusInput;
};


export type MutationSetVendorStatusArgs = {
  input: SetVendorStatusInput;
};


export type MutationSetWarehouseStatusArgs = {
  input: SetWarehouseStatusInput;
};


export type MutationSetWorkerStatusArgs = {
  input: SetWorkerStatusInput;
};


export type MutationSignS3Args = {
  input: Array<SignS3Input>;
};


export type MutationSignS3MultipleArgs = {
  input: Array<SignS3Input>;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationUndeleteEstimateItemArgs = {
  input: UndeleteEstimateItemInput;
};


export type MutationVoidPayablesArgs = {
  input: VoidPayablesInput;
};


export type MutationVoidReceivablesArgs = {
  input: VoidReceivablesInput;
};


export type MutationWriteOffPayableInstallmentsArgs = {
  input: WriteOffPayableInstallmentsInput;
};


export type MutationWriteOffReceivableInstallmentsArgs = {
  input: WriteOffReceivableInstallmentsInput;
};

export type NextInvoiceNumberInput = {
  salesOrderId: Scalars['Int']['input'];
};

export type NotAllocatedEstimateItemResponse = {
  __typename?: 'NotAllocatedEstimateItemResponse';
  allocationsLeft: Scalars['Float']['output'];
  estimateEmbeddedItem: EstimateEmbeddedItem;
  project: Project;
};

export type OpeningBalanceTransaction = Transaction & {
  __typename?: 'OpeningBalanceTransaction';
  amount: Scalars['Float']['output'];
  date: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  documentNo?: Maybe<Scalars['String']['output']>;
  entries: Array<Entry>;
  files: Array<TransactionFile>;
  history: Array<TransactionHistory>;
  id: Scalars['Int']['output'];
  isVoid: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  openingBalance: Scalars['Float']['output'];
  referenceNo?: Maybe<Scalars['String']['output']>;
  sequenceNo?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ParentProductPriceGroup = {
  __typename?: 'ParentProductPriceGroup';
  id: Scalars['Int']['output'];
  purchasingPrice: Scalars['Float']['output'];
  vendorPriceGroup: VendorPriceGroup;
};

export type PartnerSupplier = {
  __typename?: 'PartnerSupplier';
  contactName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  integrationId?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  software: Scalars['String']['output'];
};

export type Payable = {
  __typename?: 'Payable';
  account: Account;
  balance: Scalars['Float']['output'];
  categories: Array<Entry>;
  company: Company;
  companyId: Scalars['Int']['output'];
  entry?: Maybe<Entry>;
  hasDeposit: Scalars['Boolean']['output'];
  hasPayment: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  installments: Array<PayableInstallment>;
  numberOfInstallments: Scalars['Int']['output'];
  payee?: Maybe<Payee>;
  totalAmount: Scalars['Float']['output'];
  transaction: Transaction;
  type: Scalars['String']['output'];
};

export type PayableInstallment = {
  __typename?: 'PayableInstallment';
  amount: Scalars['Float']['output'];
  balance: Scalars['Float']['output'];
  bankAccount?: Maybe<Account>;
  checkNumber?: Maybe<Scalars['String']['output']>;
  depositDate?: Maybe<Scalars['Date']['output']>;
  dueDate: Scalars['Date']['output'];
  hasPayment: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  installmentNumber: Scalars['Int']['output'];
  payable: Payable;
  payableSettlements: Array<PayableSettlement>;
  paymentMethod: Scalars['String']['output'];
  remarks?: Maybe<Scalars['String']['output']>;
};

export type PayableInstallmentsResponse = {
  __typename?: 'PayableInstallmentsResponse';
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  payableInstallments: Array<PayableInstallment>;
};

export type PayablePaymentTransaction = Transaction & {
  __typename?: 'PayablePaymentTransaction';
  amount: Scalars['Float']['output'];
  banks: Array<Entry>;
  date: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  documentNo?: Maybe<Scalars['String']['output']>;
  entries: Array<Entry>;
  files: Array<TransactionFile>;
  history: Array<TransactionHistory>;
  id: Scalars['Int']['output'];
  isVoid: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  payableSettlements: Array<PayableSettlement>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  sequenceNo?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type PayableSettlement = {
  __typename?: 'PayableSettlement';
  amountEntry: Entry;
  banks: Array<Entry>;
  discountAmount: Scalars['Float']['output'];
  discountEntry: Entry;
  id: Scalars['Int']['output'];
  installment: PayableInstallment;
  paidAmount: Scalars['Float']['output'];
  penaltyAmount: Scalars['Float']['output'];
  penaltyEntry: Entry;
  totalAmount: Scalars['Float']['output'];
};

export type PayableSettlementsFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type PayableSettlementsResponse = {
  __typename?: 'PayableSettlementsResponse';
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  payableSettlements: Array<PayableSettlement>;
};

export type PayablesFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type PayablesResponse = {
  __typename?: 'PayablesResponse';
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  payables: Array<Payable>;
};

export type PayablesTotalizersFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type PayablesTotalizersResponse = {
  __typename?: 'PayablesTotalizersResponse';
  dueToday: Scalars['Float']['output'];
  dueTodayCount: Scalars['Int']['output'];
  notOverdue: Scalars['Float']['output'];
  notOverdueCount: Scalars['Int']['output'];
  overdue: Scalars['Float']['output'];
  overdueCount: Scalars['Int']['output'];
  totalOutstanding: Scalars['Float']['output'];
  totalOutstandingCount: Scalars['Int']['output'];
};

export type PayablesViewFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type Payee = Account | Associate | Customer | Vendor | Worker;

export type PayeesFilters = {
  types?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  bankAccount: Account;
  daysToDeposit?: Maybe<Scalars['Int']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  rate?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  transitAccount?: Maybe<Account>;
  type: Scalars['String']['output'];
};

export type PaymentMethodIsUsed = {
  __typename?: 'PaymentMethodIsUsed';
  message: Scalars['String']['output'];
};

export type PaymentMethodNameTaken = {
  __typename?: 'PaymentMethodNameTaken';
  message: Scalars['String']['output'];
};

export type PaymentsHaveBeenDeposited = {
  __typename?: 'PaymentsHaveBeenDeposited';
  message: Scalars['String']['output'];
};

export type Position = {
  __typename?: 'Position';
  id: Scalars['Int']['output'];
  isDiscountApprover: Scalars['Boolean']['output'];
  isDownPaymentApprover: Scalars['Boolean']['output'];
  isPurchaseApprover: Scalars['Boolean']['output'];
  isSalesOrderApprover: Scalars['Boolean']['output'];
  isSalesRevisionApprover: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  positionCompanies: Array<PositionCompany>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  workers: Array<Worker>;
};

export type PositionCompany = {
  __typename?: 'PositionCompany';
  companyId: Scalars['Int']['output'];
  maxDiscount: Scalars['Float']['output'];
};

export type PositionOccupied = {
  __typename?: 'PositionOccupied';
  message: Scalars['String']['output'];
};

export type PriceList = {
  __typename?: 'PriceList';
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Product = {
  __typename?: 'Product';
  applyServiceOnServices?: Maybe<Scalars['Boolean']['output']>;
  barcode?: Maybe<Scalars['String']['output']>;
  calculationPerSellingQuantity?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dimension1?: Maybe<Scalars['Float']['output']>;
  dimension2?: Maybe<Scalars['Float']['output']>;
  dimension3?: Maybe<Scalars['Float']['output']>;
  dimensionsUnit?: Maybe<Scalars['String']['output']>;
  displayPieces: Scalars['Boolean']['output'];
  enteringUnit?: Maybe<Scalars['String']['output']>;
  expenseAccount: Account;
  generatedSku: Scalars['Boolean']['output'];
  group?: Maybe<ProductGroup>;
  id: Scalars['Int']['output'];
  images: Array<ProductImage>;
  incomeAccount: Account;
  inventoryAccount?: Maybe<Account>;
  isUsed: Scalars['Boolean']['output'];
  itemClassification?: Maybe<ItemClassification>;
  minimumPurchasingAmount?: Maybe<Scalars['Float']['output']>;
  minimumPurchasingQuantity?: Maybe<Scalars['Float']['output']>;
  minimumQuantityForSale?: Maybe<Scalars['Float']['output']>;
  minimumSellingAmount?: Maybe<Scalars['Float']['output']>;
  multipleOfForSale?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  openingInventoryTransaction?: Maybe<InventoryTransaction>;
  parentId?: Maybe<Scalars['Int']['output']>;
  parentProductPriceGroups: Array<ParentProductPriceGroup>;
  partnerSupplier?: Maybe<PartnerSupplier>;
  price?: Maybe<Scalars['Float']['output']>;
  priceUnit: Scalars['String']['output'];
  primaryImage?: Maybe<Scalars['String']['output']>;
  productChildVariations: Array<ProductChildVariation>;
  productCompanies: Array<ProductCompany>;
  productParentVariations: Array<ProductParentVariation>;
  productPrices: Array<ProductPriceList>;
  purchasingEnteringUnit?: Maybe<Scalars['String']['output']>;
  purchasingPrice?: Maybe<Scalars['Float']['output']>;
  purchasingUnit?: Maybe<Scalars['String']['output']>;
  reorderPoint?: Maybe<Scalars['Float']['output']>;
  salesCalculationUnit: Scalars['String']['output'];
  sellingPerPurchasingQuantity: Scalars['Float']['output'];
  sellingUnit: Scalars['String']['output'];
  serviceChargingType?: Maybe<Scalars['String']['output']>;
  serviceType?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  skuWithoutSuffix?: Maybe<Scalars['String']['output']>;
  specifications?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  tags: Array<ProductTag>;
  taxable: Scalars['Boolean']['output'];
  tracksInventory: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  valueToEnter?: Maybe<Scalars['String']['output']>;
  variationGroups: Array<ProductVariationGroup>;
  vendor?: Maybe<Vendor>;
  vendorCode?: Maybe<Scalars['String']['output']>;
  vendorDescription?: Maybe<Scalars['String']['output']>;
  vendorType: Scalars['String']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
  zeroMarkup: Scalars['Boolean']['output'];
};


export type ProductPriceArgs = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductAccountsResponse = {
  __typename?: 'ProductAccountsResponse';
  assetsAccounts: Array<Account>;
  defaultAssetsAccount: Account;
  defaultExpensesAccount: Account;
  defaultIncomeAccount: Account;
  expensesAccounts: Array<Account>;
  incomeAccounts: Array<Account>;
};

export type ProductChildVariation = {
  __typename?: 'ProductChildVariation';
  id: Scalars['Int']['output'];
  option: VariationOption;
  parentVariation: ProductParentVariation;
};

export type ProductCompany = {
  __typename?: 'ProductCompany';
  company: Company;
  id: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
};

export type ProductGroup = {
  __typename?: 'ProductGroup';
  children: Array<ProductGroup>;
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  skuPortion?: Maybe<Scalars['String']['output']>;
};

export type ProductGroupSkuPortionTaken = {
  __typename?: 'ProductGroupSkuPortionTaken';
  message: Scalars['String']['output'];
};

export type ProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['Int']['output'];
  isPrimary: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};

export type ProductParentVariation = {
  __typename?: 'ProductParentVariation';
  id: Scalars['Int']['output'];
  options: Array<VariationOption>;
  order: Scalars['Int']['output'];
  productParentVariationOptions: Array<ProductParentVariationOption>;
  salesFormsName: Scalars['String']['output'];
  variation: Variation;
  variationGroup?: Maybe<ProductVariationGroup>;
  variationGroupId?: Maybe<Scalars['Int']['output']>;
};

export type ProductParentVariationOption = {
  __typename?: 'ProductParentVariationOption';
  id: Scalars['String']['output'];
  option: VariationOption;
  priceModifier?: Maybe<Scalars['Float']['output']>;
  priceModifierType?: Maybe<Scalars['String']['output']>;
  vendorPriceGroup?: Maybe<VendorPriceGroup>;
};

export type ProductPriceList = {
  __typename?: 'ProductPriceList';
  markup?: Maybe<Scalars['Float']['output']>;
  priceList: PriceList;
  sellingPrice?: Maybe<Scalars['Float']['output']>;
};

export type ProductSkuTaken = {
  __typename?: 'ProductSkuTaken';
  message: Scalars['String']['output'];
};

export type ProductTag = {
  __typename?: 'ProductTag';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ProductVariationGroup = {
  __typename?: 'ProductVariationGroup';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ProductsViewResponse = {
  __typename?: 'ProductsViewResponse';
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  products: Array<Product>;
};

export type Project = {
  __typename?: 'Project';
  approvalForecast?: Maybe<Scalars['Date']['output']>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressLine3?: Maybe<Scalars['String']['output']>;
  billingCity?: Maybe<Scalars['String']['output']>;
  billingCountry?: Maybe<Country>;
  billingPostal?: Maybe<Scalars['String']['output']>;
  billingState?: Maybe<State>;
  briefingNotes?: Maybe<Scalars['String']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  building?: Maybe<Building>;
  code: Scalars['String']['output'];
  company: Company;
  contacts: Array<ProjectContact>;
  copyBillingAddressFromCustomer: Scalars['Boolean']['output'];
  copyShippingAddressFrom: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: User;
  customer: Customer;
  customerSource?: Maybe<CustomerSource>;
  delivery: Delivery;
  designer?: Maybe<Worker>;
  endCustomer: Customer;
  estimates: Array<Estimate>;
  favoriteEstimate: Estimate;
  formFooterDetails?: Maybe<Scalars['String']['output']>;
  formNotes?: Maybe<Scalars['String']['output']>;
  formTerms?: Maybe<Scalars['String']['output']>;
  generalNotes?: Maybe<Scalars['String']['output']>;
  hideDiscount: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  lastActivity: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  number: Scalars['String']['output'];
  projectAssociates: Array<ProjectAssociate>;
  projectGroup: ProjectGroup;
  projectOwner: Worker;
  qualification: ProjectQualification;
  revision?: Maybe<Estimate>;
  rooms: Array<ProjectRoom>;
  saleOrder?: Maybe<SaleOrder>;
  shippingAddressLine1?: Maybe<Scalars['String']['output']>;
  shippingAddressLine2?: Maybe<Scalars['String']['output']>;
  shippingAddressLine3?: Maybe<Scalars['String']['output']>;
  shippingCity?: Maybe<Scalars['String']['output']>;
  shippingCountry?: Maybe<Country>;
  shippingPostal?: Maybe<Scalars['String']['output']>;
  shippingState?: Maybe<State>;
  stage: ProjectStage;
  status: ProjectStatus;
  unitSystem: Scalars['String']['output'];
};

export type ProjectAssociate = {
  __typename?: 'ProjectAssociate';
  associate: Associate;
  commissionRate?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
};

export type ProjectContact = {
  __typename?: 'ProjectContact';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ProjectGroup = {
  __typename?: 'ProjectGroup';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ProjectQualification = {
  __typename?: 'ProjectQualification';
  colorIndex: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export type ProjectRoom = {
  __typename?: 'ProjectRoom';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ProjectStage = {
  __typename?: 'ProjectStage';
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export enum ProjectStatus {
  Canceled = 'CANCELED',
  Open = 'OPEN'
}

export type ProjectsFilters = {
  isSold?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  workerId?: InputMaybe<Scalars['Int']['input']>;
};

export type ProjectsResponse = {
  __typename?: 'ProjectsResponse';
  hasMore: Scalars['Boolean']['output'];
  projects: Array<Project>;
};

export type ProjectsToAssociateWithFilters = {
  customerId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsViewFilters = {
  approvalForecastFrom?: InputMaybe<Scalars['String']['input']>;
  approvalForecastTo?: InputMaybe<Scalars['String']['input']>;
  associateId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  customerSourceId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  projectQualificationId?: InputMaybe<Scalars['String']['input']>;
  salespersonId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectsViewResponse = {
  __typename?: 'ProjectsViewResponse';
  averagePrice: Scalars['Float']['output'];
  closingThisMonthCount: Scalars['Float']['output'];
  closingThisMonthTotal: Scalars['Float']['output'];
  closingThisWeekCount: Scalars['Float']['output'];
  closingThisWeekTotal: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  projects: Array<Project>;
  totalPrice: Scalars['Float']['output'];
  totalPricedProjects: Scalars['Int']['output'];
};

export type PurchaseOrder = {
  __typename?: 'PurchaseOrder';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  eta?: Maybe<Scalars['Date']['output']>;
  files: Array<PurchaseOrderFile>;
  history: Array<PurchaseOrderHistory>;
  id: Scalars['Int']['output'];
  installments: Array<PurchaseOrderInstallment>;
  internalNotes?: Maybe<Scalars['String']['output']>;
  items: Array<PurchaseOrderItem>;
  lastIssuedDate?: Maybe<Scalars['Date']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  number: Scalars['String']['output'];
  payeeVendor: Vendor;
  paymentTerm?: Maybe<VendorPaymentTerm>;
  status: Scalars['String']['output'];
  vendor: Vendor;
  vendorContact?: Maybe<VendorContact>;
  vendorNumber?: Maybe<Scalars['String']['output']>;
  warehouse: Warehouse;
};

export type PurchaseOrderFile = {
  __typename?: 'PurchaseOrderFile';
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type PurchaseOrderHistory = {
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type PurchaseOrderHistoryComment = PurchaseOrderHistory & {
  __typename?: 'PurchaseOrderHistoryComment';
  comment: Scalars['String']['output'];
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type PurchaseOrderHistoryConfirmedAsSupplier = PurchaseOrderHistory & {
  __typename?: 'PurchaseOrderHistoryConfirmedAsSupplier';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type PurchaseOrderHistoryCreation = PurchaseOrderHistory & {
  __typename?: 'PurchaseOrderHistoryCreation';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type PurchaseOrderHistoryMarkedAsSent = PurchaseOrderHistory & {
  __typename?: 'PurchaseOrderHistoryMarkedAsSent';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type PurchaseOrderHistoryUpdateAmount = PurchaseOrderHistory & {
  __typename?: 'PurchaseOrderHistoryUpdateAmount';
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  newAmount: Scalars['Float']['output'];
  oldAmount: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type PurchaseOrderInstallment = {
  __typename?: 'PurchaseOrderInstallment';
  amount: Scalars['Float']['output'];
  dueDays: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  stage: Scalars['String']['output'];
};

export type PurchaseOrderItem = {
  __typename?: 'PurchaseOrderItem';
  dimension1?: Maybe<Scalars['Float']['output']>;
  dimension2?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  inventoryAllocations: Array<InventoryAllocation>;
  notes?: Maybe<Scalars['String']['output']>;
  pieces: Scalars['Int']['output'];
  price: Scalars['Float']['output'];
  product: Product;
  reservations: Scalars['Float']['output'];
  restocking: Scalars['Float']['output'];
  salesAllocations: Scalars['Float']['output'];
};

export type PurchaseOrdersCountResponse = {
  __typename?: 'PurchaseOrdersCountResponse';
  newPurchaseOrdersCount: Scalars['Int']['output'];
  openPurchaseOrdersCount: Scalars['Int']['output'];
  toBePurchasedCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  accounts: Array<Account>;
  accountsBySpecialAccounts: Array<Account>;
  associateTypes: Array<AssociateType>;
  associates: Array<Associate>;
  bankTransactions: BankTransactionsResponse;
  banking: Array<Account>;
  bankingByType: Array<Account>;
  billCategoryLineAccounts: BillCategoryLineAccountsResponse;
  bonusProfiles: Array<BonusProfile>;
  buildings: Array<Building>;
  chartOfAccounts: Scalars['JSON']['output'];
  checkAuth?: Maybe<CheckAuthResponse>;
  checkReceivables: Array<ReceivableInstallment>;
  childProductByVariations?: Maybe<Product>;
  closedPurchaseOrders: Array<PurchaseOrder>;
  commissionProfiles: Array<CommissionProfile>;
  companyUsers: Array<CompanyUser>;
  competitors: Array<Competitor>;
  countries: Array<Country>;
  customerSources: Array<CustomerSource>;
  customers: Array<Customer>;
  dashboard: Dashboard;
  defaultSalesAgreement?: Maybe<SalesAgreement>;
  deliveryServices: Array<Product>;
  drawerProducts: DrawerProductsResponse;
  drawerServices: DrawerServicesResponse;
  entryById: Entry;
  estimate: Estimate;
  estimateProfitAndLoss: EstimateProfitAndLossResponse;
  expenseCategoryAccounts: Array<Account>;
  fifo: Array<FifoItem>;
  grossProfitRate: GrossProfitRateResponse;
  grossProfitRateSales: GrossProfitRateSalesResponse;
  grossProfitRateSalesByPerson: GrossProfitRateSalesByPersonResponse;
  groupUsers: Array<User>;
  groups: Array<Group>;
  incomeCategoryAccounts: Array<Account>;
  installationServices: Array<Product>;
  inventoryProducts: Array<Product>;
  itemClassifications: Array<ItemClassification>;
  journal: Array<Transaction>;
  lossReasons: Array<LossReason>;
  mobileDashboard: MobileDashboard;
  moneyInTransit: Array<ReceivableInstallment>;
  needsDiscountAuthorization: Array<Estimate>;
  newPurchaseOrders: Array<PurchaseOrder>;
  noop?: Maybe<Scalars['Int']['output']>;
  notAllocatedEstimateItems: Array<NotAllocatedEstimateItemResponse>;
  openPurchaseOrders: Array<PurchaseOrder>;
  partnerSuppliers: Array<PartnerSupplier>;
  payableAccounts: Array<Account>;
  payableById: Payable;
  payableInstallments: PayableInstallmentsResponse;
  payableInstallmentsById: Array<PayableInstallment>;
  payablePaymentById: PayablePaymentTransaction;
  payableSettlements: PayableSettlementsResponse;
  payables: PayablesResponse;
  payablesTotalizers: PayablesTotalizersResponse;
  payees: Array<Payee>;
  paymentMethods: Array<PaymentMethod>;
  paymentMethodsByAssociatedAccount: Array<PaymentMethod>;
  positions: Array<Position>;
  priceLists: Array<PriceList>;
  product: Product;
  productAccounts: ProductAccountsResponse;
  productGroups: Array<ProductGroup>;
  productTags: Array<ProductTag>;
  products: Array<Product>;
  productsView: ProductsViewResponse;
  project: Project;
  projects: ProjectsResponse;
  projectsToAssociateWith: Array<Project>;
  projectsView: ProjectsViewResponse;
  purchaseOrdersCount: PurchaseOrdersCountResponse;
  receivableById: Receivable;
  receivableInstallments: ReceivableInstallmentsResponse;
  receivableInstallmentsById: Array<ReceivableInstallment>;
  receivablePaymentAccounts: Array<Account>;
  receivablePaymentById: ReceivablePaymentTransaction;
  receivableSettlements: ReceivableSettlementsResponse;
  receivables: ReceivablesResponse;
  receivablesTotalizers: ReceivablesTotalizersResponse;
  roles: Array<Role>;
  saleOrdersView: SaleOrdersViewResponse;
  salesAgreements: Array<SalesAgreement>;
  salesOrderAllocations: Array<SaleOrder>;
  salesTaxes: Array<SalesTax>;
  serviceAccounts: ServiceAccountsResponse;
  stockOpening: StockOpeningResponse;
  suppliers: Array<Vendor>;
  teams: Array<Team>;
  terms: Array<Term>;
  traders: Array<Trader>;
  transitStages: Array<TransitStage>;
  usersWithoutLink: Array<GroupUser>;
  variations: Array<Variation>;
  vendors: Array<Vendor>;
  viewer: Viewer;
  viewerCompanies: Array<CompanyUser>;
  viewerCompany: Company;
  viewerCompanySettings: CompanySettings;
  viewerGroup: Group;
  warehouses: Array<Warehouse>;
  worker: Worker;
  workers: Array<Worker>;
};


export type QueryAccountsArgs = {
  filters?: InputMaybe<AccountsFilters>;
};


export type QueryAccountsBySpecialAccountsArgs = {
  filters: AccountsBySpecialAccountsFilters;
};


export type QueryAssociateTypesArgs = {
  filters?: InputMaybe<AssociateTypesFilters>;
};


export type QueryAssociatesArgs = {
  filters?: InputMaybe<AssociatesFilters>;
};


export type QueryBankTransactionsArgs = {
  filters: BankTransactionsFilters;
};


export type QueryBankingArgs = {
  filters?: InputMaybe<BankingFilters>;
};


export type QueryBonusProfilesArgs = {
  filters?: InputMaybe<BonusProfilesFilters>;
};


export type QueryBuildingsArgs = {
  filters?: InputMaybe<BuildingsFilters>;
};


export type QueryCheckAuthArgs = {
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCheckReceivablesArgs = {
  filters: CheckReceivablesFilters;
};


export type QueryChildProductByVariationsArgs = {
  filters: ChildProductByVariationsFilters;
};


export type QueryClosedPurchaseOrdersArgs = {
  filters: ClosedPurchaseOrdersFilters;
};


export type QueryCommissionProfilesArgs = {
  filters?: InputMaybe<CommissionProfilesFilters>;
};


export type QueryCompanyUsersArgs = {
  filters?: InputMaybe<UsersFilters>;
};


export type QueryCompetitorsArgs = {
  filters?: InputMaybe<CompetitorsFilters>;
};


export type QueryCustomerSourcesArgs = {
  filters?: InputMaybe<CustomerSourcesFilters>;
};


export type QueryCustomersArgs = {
  filters?: InputMaybe<CustomersFilters>;
};


export type QueryDashboardArgs = {
  filters: DashboardFilters;
};


export type QueryDeliveryServicesArgs = {
  filters: DeliveryServicesFilters;
};


export type QueryDrawerProductsArgs = {
  filters: DrawerProductsFilters;
};


export type QueryDrawerServicesArgs = {
  filters: DrawerServicesFilters;
};


export type QueryEntryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryEstimateArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEstimateProfitAndLossArgs = {
  estimateId: Scalars['Int']['input'];
};


export type QueryFifoArgs = {
  filters?: InputMaybe<FifoFilters>;
};


export type QueryGrossProfitRateArgs = {
  filters: GrossProfitRateFilters;
};


export type QueryGrossProfitRateSalesArgs = {
  filters: GrossProfitRateSalesFilters;
};


export type QueryGrossProfitRateSalesByPersonArgs = {
  filters: GrossProfitRateSalesByPersonFilters;
};


export type QueryGroupUsersArgs = {
  filters?: InputMaybe<GroupUsersFilters>;
};


export type QueryInstallationServicesArgs = {
  filters: InstallationServicesFilters;
};


export type QueryItemClassificationsArgs = {
  filters?: InputMaybe<ItemClassificationsFilters>;
};


export type QueryJournalArgs = {
  filters: JournalFilters;
};


export type QueryLossReasonsArgs = {
  filters?: InputMaybe<LossReasonsFilters>;
};


export type QueryMoneyInTransitArgs = {
  filters: MoneyInTransitFilters;
};


export type QueryNewPurchaseOrdersArgs = {
  filters: NewPurchaseOrdersFilters;
};


export type QueryNotAllocatedEstimateItemsArgs = {
  input: NotAllocatedEstimateItemsInput;
};


export type QueryOpenPurchaseOrdersArgs = {
  filters: OpenPurchaseOrdersFilters;
};


export type QueryPayableByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayableInstallmentsArgs = {
  filters: PayablesViewFilters;
};


export type QueryPayableInstallmentsByIdArgs = {
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  payableIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryPayablePaymentByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayableSettlementsArgs = {
  filters: PayableSettlementsFilters;
};


export type QueryPayablesArgs = {
  filters: PayablesFilters;
};


export type QueryPayablesTotalizersArgs = {
  filters: PayablesTotalizersFilters;
};


export type QueryPayeesArgs = {
  filters?: InputMaybe<PayeesFilters>;
};


export type QueryPaymentMethodsArgs = {
  filters?: InputMaybe<PaymentMethodsFilters>;
};


export type QueryPaymentMethodsByAssociatedAccountArgs = {
  filters?: InputMaybe<PaymentMethodsByAssociatedAccountFilters>;
};


export type QueryPositionsArgs = {
  filters?: InputMaybe<PositionsFilters>;
};


export type QueryProductArgs = {
  filters: ProductFilters;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductsFilters>;
};


export type QueryProductsViewArgs = {
  filters?: InputMaybe<ProductsViewFilters>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectsFilters>;
};


export type QueryProjectsToAssociateWithArgs = {
  filters?: InputMaybe<ProjectsToAssociateWithFilters>;
};


export type QueryProjectsViewArgs = {
  filters?: InputMaybe<ProjectsViewFilters>;
};


export type QueryReceivableByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReceivableInstallmentsArgs = {
  filters: ReceivableInstallmentsFilters;
};


export type QueryReceivableInstallmentsByIdArgs = {
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  receivableIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};


export type QueryReceivablePaymentByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReceivableSettlementsArgs = {
  filters: ReceivableSettlementsFilters;
};


export type QueryReceivablesArgs = {
  filters: ReceivablesFilters;
};


export type QueryReceivablesTotalizersArgs = {
  filters: ReceivablesTotalizersFilters;
};


export type QueryRolesArgs = {
  filters?: InputMaybe<RolesFilters>;
};


export type QuerySaleOrdersViewArgs = {
  filters?: InputMaybe<SaleOrdersViewFilters>;
};


export type QuerySalesAgreementsArgs = {
  filters?: InputMaybe<SalesAgreementsFilters>;
};


export type QuerySalesOrderAllocationsArgs = {
  filters: SalesOrderAllocationsFilters;
};


export type QuerySalesTaxesArgs = {
  filters?: InputMaybe<SalesTaxesFilters>;
};


export type QueryStockOpeningArgs = {
  filters?: InputMaybe<StockOpeningFilters>;
};


export type QuerySuppliersArgs = {
  filters?: InputMaybe<SuppliersFilters>;
};


export type QueryTeamsArgs = {
  filters?: InputMaybe<TeamsFilters>;
};


export type QueryTermsArgs = {
  filters?: InputMaybe<TermsFilters>;
};


export type QueryTradersArgs = {
  filters?: InputMaybe<TradersFilters>;
};


export type QueryVariationsArgs = {
  filters?: InputMaybe<VariationsFilters>;
};


export type QueryVendorsArgs = {
  filters?: InputMaybe<VendorsFilters>;
};


export type QueryWarehousesArgs = {
  filters?: InputMaybe<WarehousesFilters>;
};


export type QueryWorkerArgs = {
  filters: WorkerFilters;
};


export type QueryWorkersArgs = {
  filters?: InputMaybe<WorkersFilters>;
};

export type Receivable = {
  __typename?: 'Receivable';
  account: Account;
  balance: Scalars['Float']['output'];
  categories: Array<Entry>;
  company: Company;
  companyId: Scalars['Int']['output'];
  hasDeposit: Scalars['Boolean']['output'];
  hasPayment: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  installments: Array<ReceivableInstallment>;
  isMoneyInTransit: Scalars['Boolean']['output'];
  numberOfInstallments: Scalars['Int']['output'];
  payee?: Maybe<Payee>;
  receivableSettlements: Array<ReceivableSettlement>;
  salesOrder?: Maybe<SaleOrder>;
  totalAmount: Scalars['Float']['output'];
  transaction: Transaction;
  type: Scalars['String']['output'];
};

export type ReceivableInstallment = {
  __typename?: 'ReceivableInstallment';
  amount: Scalars['Float']['output'];
  balance: Scalars['Float']['output'];
  bankAccount?: Maybe<Account>;
  bankAccountNo?: Maybe<Scalars['String']['output']>;
  bankBranchNo?: Maybe<Scalars['String']['output']>;
  bankCode?: Maybe<Scalars['String']['output']>;
  checkNumber?: Maybe<Scalars['String']['output']>;
  company: Company;
  companyId: Scalars['Int']['output'];
  depositDate?: Maybe<Scalars['Date']['output']>;
  dueDate: Scalars['Date']['output'];
  hasPayment: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  installmentNumber: Scalars['Int']['output'];
  paidAmount: Scalars['Float']['output'];
  receivable: Receivable;
  receivableSettlements: Array<ReceivableSettlement>;
  receivementMethod?: Maybe<PaymentMethod>;
  remarks?: Maybe<Scalars['String']['output']>;
};

export type ReceivableInstallmentsResponse = {
  __typename?: 'ReceivableInstallmentsResponse';
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  receivableInstallments: Array<ReceivableInstallment>;
};

export type ReceivablePaymentTransaction = Transaction & {
  __typename?: 'ReceivablePaymentTransaction';
  amount: Scalars['Float']['output'];
  banks: Array<Entry>;
  date: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  documentNo?: Maybe<Scalars['String']['output']>;
  entries: Array<Entry>;
  files: Array<TransactionFile>;
  history: Array<TransactionHistory>;
  id: Scalars['Int']['output'];
  isVoid: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  receivableSettlements: Array<ReceivableSettlement>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  sequenceNo?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type ReceivableSettlement = {
  __typename?: 'ReceivableSettlement';
  amountEntry: Entry;
  banks: Array<Entry>;
  discountAmount: Scalars['Float']['output'];
  discountEntry: Entry;
  id: Scalars['Int']['output'];
  installment: ReceivableInstallment;
  paidAmount: Scalars['Float']['output'];
  penaltyAmount: Scalars['Float']['output'];
  penaltyEntry: Entry;
  totalAmount: Scalars['Float']['output'];
};

export type ReceivableSettlementsResponse = {
  __typename?: 'ReceivableSettlementsResponse';
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  receivableSettlements: Array<ReceivableSettlement>;
};

export type ReceivablesFilters = {
  balance?: InputMaybe<Scalars['Float']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type ReceivablesResponse = {
  __typename?: 'ReceivablesResponse';
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  receivables: Array<Receivable>;
};

export type ReceivablesTotalizersFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ReceivablesTotalizersResponse = {
  __typename?: 'ReceivablesTotalizersResponse';
  dueToday: Scalars['Float']['output'];
  dueTodayCount: Scalars['Int']['output'];
  notOverdue: Scalars['Float']['output'];
  notOverdueCount: Scalars['Int']['output'];
  overdue: Scalars['Float']['output'];
  overdueCount: Scalars['Int']['output'];
  totalOutstanding: Scalars['Float']['output'];
  totalOutstandingCount: Scalars['Int']['output'];
};

export type ReplaceEmbeddedItemAndCreateChildProductInput = {
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  estimateEmbeddedItemId: Scalars['Int']['input'];
  parentId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
  variations: Array<ReplaceEmbeddedItemAndCreateChildProductVariationsInput>;
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type ReplaceEmbeddedItemAndCreateChildProductVariationsInput = {
  optionId: Scalars['Int']['input'];
  parentVariationId: Scalars['Int']['input'];
};

export type ReplaceEmbeddedItemInput = {
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  estimateEmbeddedItemId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
};

export type Role = {
  __typename?: 'Role';
  groupUsers: Array<GroupUser>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  permissions: Scalars['JSON']['output'];
};

export type RoleOccupied = {
  __typename?: 'RoleOccupied';
  message: Scalars['String']['output'];
};

export type S3Payload = {
  __typename?: 'S3Payload';
  filename: Scalars['String']['output'];
  filetype: Scalars['String']['output'];
  signedRequest: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type SaleOrder = {
  __typename?: 'SaleOrder';
  code: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  estimate: Estimate;
  id: Scalars['Int']['output'];
  itemsByVendor: Array<SaleOrderItemsByVendor>;
  number: Scalars['String']['output'];
  project: Project;
  receivable?: Maybe<Receivable>;
  status: Scalars['String']['output'];
};

export type SaleOrderItemsByVendor = {
  __typename?: 'SaleOrderItemsByVendor';
  amount: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  pieces: Scalars['Int']['output'];
  vendor: Vendor;
};

export type SaleOrdersViewFilters = {
  associateId?: InputMaybe<Scalars['Int']['input']>;
  customerSourceId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  salepersonId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type SaleOrdersViewResponse = {
  __typename?: 'SaleOrdersViewResponse';
  averageDiscount: Scalars['Float']['output'];
  averagePrice: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  projects: Array<Project>;
  totalPrice: Scalars['Float']['output'];
  totalPricedSaleOrders: Scalars['Int']['output'];
};

export type SalesAgreement = {
  __typename?: 'SalesAgreement';
  content: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type SalesTax = {
  __typename?: 'SalesTax';
  agency?: Maybe<Scalars['String']['output']>;
  applyOnProducts: Scalars['Boolean']['output'];
  applyOnServices: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  status: Scalars['String']['output'];
  taxNumber?: Maybe<Scalars['String']['output']>;
};

export type SamePassword = {
  __typename?: 'SamePassword';
  message: Scalars['String']['output'];
};

export type ServiceAccountsResponse = {
  __typename?: 'ServiceAccountsResponse';
  defaultInstallationCostAccount: Account;
  defaultInstallationIncomeAccount: Account;
  defaultServiceIncomeAccount: Account;
  defaultServicesCostAccount: Account;
  defaultShippingCostAccount: Account;
  defaultShippingIncomeAccount: Account;
  expensesAccounts: Array<Account>;
  incomeAccounts: Array<Account>;
};

export type SetProjectHideDiscountInput = {
  hideDiscount: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
};

export type SetProjectStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetSaleOrderStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type State = {
  __typename?: 'State';
  abbreviation: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type StockOpeningResponse = {
  __typename?: 'StockOpeningResponse';
  count: Scalars['Int']['output'];
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  products: Array<Product>;
  totalInventoryValue: Scalars['Float']['output'];
};

export type Team = {
  __typename?: 'Team';
  abbreviation: Scalars['String']['output'];
  company: Company;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  members: Array<Worker>;
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Term = {
  __typename?: 'Term';
  bankAccount?: Maybe<Account>;
  companies: Array<Company>;
  daysToDeposit: Scalars['Int']['output'];
  defaultEstimateDiscount?: Maybe<Scalars['Float']['output']>;
  defaultInstallments: Scalars['Int']['output'];
  defaultRequiresDeposit: Scalars['Boolean']['output'];
  defaultTerm: Scalars['Boolean']['output'];
  depositEditableOnFly: Scalars['Boolean']['output'];
  depositPercentage?: Maybe<Scalars['Float']['output']>;
  depositType: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  dueIn: Scalars['Int']['output'];
  dueInType: Scalars['String']['output'];
  financingAgreementPercentage: Scalars['Float']['output'];
  financingAgreementVendor?: Maybe<Vendor>;
  financingMethods: Array<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  installmentsEditableOnFly: Scalars['Boolean']['output'];
  interestRates: Array<Scalars['Float']['output']>;
  maxDeferredDays: Scalars['Int']['output'];
  maxDownPaymentDueIn: Scalars['Int']['output'];
  maximumInstallments: Scalars['Int']['output'];
  minDeferredDays: Scalars['Int']['output'];
  minInstallments: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  paymentMethod?: Maybe<PaymentMethod>;
  rate: Scalars['Float']['output'];
  requiresApproval: Scalars['Boolean']['output'];
  stages: Array<TermStage>;
  status: Scalars['String']['output'];
  subsidizedInterestUpToInstallmentNumber: Scalars['Int']['output'];
  transitAccount?: Maybe<Account>;
  type: Scalars['String']['output'];
  typesOfSales: Array<Scalars['String']['output']>;
};

export type TermNameTaken = {
  __typename?: 'TermNameTaken';
  message: Scalars['String']['output'];
};

export type TermOccupied = {
  __typename?: 'TermOccupied';
  message: Scalars['String']['output'];
};

export type TermStage = {
  __typename?: 'TermStage';
  amount: Scalars['Float']['output'];
  expectedDueIn: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  stage?: Maybe<Scalars['String']['output']>;
  transitStage?: Maybe<TransitStage>;
};

export type TextEditorContent = {
  __typename?: 'TextEditorContent';
  companies: Array<Company>;
  content: Scalars['JSON']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type Trader = {
  __typename?: 'Trader';
  displayName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TradersFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Transaction = {
  amount: Scalars['Float']['output'];
  date: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  documentNo?: Maybe<Scalars['String']['output']>;
  entries: Array<Entry>;
  files: Array<TransactionFile>;
  history: Array<TransactionHistory>;
  id: Scalars['Int']['output'];
  isVoid: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  referenceNo?: Maybe<Scalars['String']['output']>;
  sequenceNo?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type TransactionFile = {
  __typename?: 'TransactionFile';
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type TransactionHistory = {
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryCcDeposit = TransactionHistory & {
  __typename?: 'TransactionHistoryCcDeposit';
  bank: Scalars['String']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  referenceNo: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryClearingCreation = TransactionHistory & {
  __typename?: 'TransactionHistoryClearingCreation';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryClearingDeletion = TransactionHistory & {
  __typename?: 'TransactionHistoryClearingDeletion';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryClearingUpdateAmount = TransactionHistory & {
  __typename?: 'TransactionHistoryClearingUpdateAmount';
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  newAmount: Scalars['Float']['output'];
  oldAmount: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryComment = TransactionHistory & {
  __typename?: 'TransactionHistoryComment';
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryCreation = TransactionHistory & {
  __typename?: 'TransactionHistoryCreation';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryPayment = TransactionHistory & {
  __typename?: 'TransactionHistoryPayment';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  penalty?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type TransactionHistoryPaymentDeletion = TransactionHistory & {
  __typename?: 'TransactionHistoryPaymentDeletion';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryPaymentTransaction = TransactionHistory & {
  __typename?: 'TransactionHistoryPaymentTransaction';
  amount: Scalars['Float']['output'];
  banks: Array<TransactionHistoryPaymentTransactionBank>;
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  penalty?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type TransactionHistoryPaymentTransactionBank = {
  __typename?: 'TransactionHistoryPaymentTransactionBank';
  amount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type TransactionHistoryPaymentUpdate = TransactionHistory & {
  __typename?: 'TransactionHistoryPaymentUpdate';
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  newAmount: Scalars['Float']['output'];
  newDiscount?: Maybe<Scalars['Float']['output']>;
  newPenalty?: Maybe<Scalars['Float']['output']>;
  oldAmount: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryUpdate = TransactionHistory & {
  __typename?: 'TransactionHistoryUpdate';
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryUpdateAmount = TransactionHistory & {
  __typename?: 'TransactionHistoryUpdateAmount';
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  newAmount: Scalars['Float']['output'];
  oldAmount: Scalars['Float']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryVoid = TransactionHistory & {
  __typename?: 'TransactionHistoryVoid';
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryWriteOff = TransactionHistory & {
  __typename?: 'TransactionHistoryWriteOff';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransactionHistoryWriteOffDeletion = TransactionHistory & {
  __typename?: 'TransactionHistoryWriteOffDeletion';
  amount: Scalars['Float']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type TransitStage = {
  __typename?: 'TransitStage';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  avatar: Avatar;
  companies: Array<CompanyUser>;
  forceChangePassword: Scalars['Boolean']['output'];
  groupUser: GroupUser;
  id: Scalars['Int']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type UserAlreadyInCompany = {
  __typename?: 'UserAlreadyInCompany';
  message: Scalars['String']['output'];
};

export type UserInvitationPending = {
  __typename?: 'UserInvitationPending';
  message: Scalars['String']['output'];
};

export type UserIsUsed = {
  __typename?: 'UserIsUsed';
  message: Scalars['String']['output'];
};

export type Variation = {
  __typename?: 'Variation';
  code?: Maybe<Scalars['String']['output']>;
  codeAndName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  options: Array<VariationOption>;
  usesPriceGroup: Scalars['Boolean']['output'];
  vendor: Vendor;
};


export type VariationOptionsArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};

export type VariationOption = {
  __typename?: 'VariationOption';
  code?: Maybe<Scalars['String']['output']>;
  codeAndName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  vendorPriceGroup?: Maybe<VendorPriceGroup>;
  vendorPriceGroupId?: Maybe<Scalars['Int']['output']>;
};

export type VariationOptionCodeTaken = {
  __typename?: 'VariationOptionCodeTaken';
  message: Scalars['String']['output'];
};

export type Vendor = {
  __typename?: 'Vendor';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['Float']['output']>;
  bankAccountNo?: Maybe<Scalars['String']['output']>;
  businessIdNo?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  companyCodes: Array<VendorCompanyCode>;
  contacts: Array<VendorContact>;
  country?: Maybe<Country>;
  defaultMarkup?: Maybe<Scalars['Float']['output']>;
  displayName: Scalars['String']['output'];
  document1?: Maybe<Scalars['String']['output']>;
  document2?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expenseAccount?: Maybe<Account>;
  fax?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  inventoryAccount?: Maybe<Account>;
  landedCosts: Array<VendorLandedCost>;
  leadTime?: Maybe<Scalars['Int']['output']>;
  leadTimeType: Scalars['String']['output'];
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  paymentTerms: Array<VendorPaymentTerm>;
  phone1?: Maybe<Scalars['String']['output']>;
  phone2?: Maybe<Scalars['String']['output']>;
  postal?: Maybe<Scalars['String']['output']>;
  priceGroups: Array<VendorPriceGroup>;
  purchaseOrderEmail?: Maybe<Scalars['String']['output']>;
  salesOrderEmail?: Maybe<Scalars['String']['output']>;
  skuPortion?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  vendorCompanies: Array<VendorCompany>;
  website?: Maybe<Scalars['String']['output']>;
};


export type VendorPriceGroupsArgs = {
  status?: InputMaybe<Scalars['String']['input']>;
};

export type VendorCompany = {
  __typename?: 'VendorCompany';
  company: Company;
  defaultMarkup?: Maybe<Scalars['Float']['output']>;
  finalMarkup: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
};

export type VendorCompanyCode = {
  __typename?: 'VendorCompanyCode';
  code: Scalars['String']['output'];
  companyId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

export type VendorContact = {
  __typename?: 'VendorContact';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
};

export type VendorLandedCost = {
  __typename?: 'VendorLandedCost';
  account: Account;
  addToProducts: Scalars['Boolean']['output'];
  amount: Scalars['Float']['output'];
  amountType: Scalars['String']['output'];
  companies: Array<Company>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
};

export type VendorPaymentTerm = {
  __typename?: 'VendorPaymentTerm';
  id: Scalars['Int']['output'];
  installments: Array<VendorPaymentTermInstallment>;
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  priceModifier: Scalars['Float']['output'];
};

export type VendorPaymentTermInstallment = {
  __typename?: 'VendorPaymentTermInstallment';
  dueDays: Scalars['Int']['output'];
  share: Scalars['Float']['output'];
  stage: Scalars['String']['output'];
};

export type VendorPriceGroup = {
  __typename?: 'VendorPriceGroup';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Viewer = {
  __typename?: 'Viewer';
  avatar: Avatar;
  companies: Array<Company>;
  company?: Maybe<Company>;
  forceChangePassword: Scalars['Boolean']['output'];
  group?: Maybe<Group>;
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role?: Maybe<Role>;
  status: Scalars['String']['output'];
  worker?: Maybe<Worker>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  id: Scalars['Int']['output'];
  isDefault: Scalars['Boolean']['output'];
  locations: Array<WarehouseLocation>;
  name: Scalars['String']['output'];
  postal?: Maybe<Scalars['String']['output']>;
  state?: Maybe<State>;
  status: Scalars['String']['output'];
  streetNumber?: Maybe<Scalars['String']['output']>;
};

export type WarehouseLocation = {
  __typename?: 'WarehouseLocation';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type WarehousesFilters = {
  status?: InputMaybe<Scalars['String']['input']>;
};

export type Worker = {
  __typename?: 'Worker';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  avatar: Avatar;
  birthDate?: Maybe<Scalars['DateTime']['output']>;
  bonusProfiles?: Maybe<Array<BonusProfile>>;
  city?: Maybe<Scalars['String']['output']>;
  commissionProfiles: Array<CommissionProfile>;
  companyEmail?: Maybe<Scalars['String']['output']>;
  contractorType?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  displayName: Scalars['String']['output'];
  document?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  employeeNumber?: Maybe<Scalars['String']['output']>;
  files: Array<WorkerFile>;
  groupUser?: Maybe<GroupUser>;
  hiredDate?: Maybe<Scalars['DateTime']['output']>;
  history: Array<WorkerHistory>;
  id: Scalars['Int']['output'];
  installationTeams: Array<WorkerInstallationTeam>;
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  position: Position;
  postal?: Maybe<Scalars['String']['output']>;
  releasedDate?: Maybe<Scalars['DateTime']['output']>;
  state?: Maybe<State>;
  status: WorkerStatus;
  teams: Array<Team>;
  type: Scalars['String']['output'];
  usesInstallationTeams: Scalars['Boolean']['output'];
  wageAmount?: Maybe<Scalars['Float']['output']>;
  wageFrequency?: Maybe<Scalars['String']['output']>;
  wageNextPayday?: Maybe<Scalars['DateTime']['output']>;
  wageType?: Maybe<Scalars['String']['output']>;
  workerCompanies: Array<WorkerCompany>;
  workerPositions: Array<WorkerPosition>;
};

export type WorkerCompany = {
  __typename?: 'WorkerCompany';
  company: Company;
  id: Scalars['Int']['output'];
  isDiscountApprover: Scalars['Boolean']['output'];
  isDownPaymentApprover: Scalars['Boolean']['output'];
  isPrimary: Scalars['Boolean']['output'];
  isPurchaseApprover: Scalars['Boolean']['output'];
  isSalesOrderApprover: Scalars['Boolean']['output'];
  isSalesRevisionApprover: Scalars['Boolean']['output'];
};

export type WorkerFile = {
  __typename?: 'WorkerFile';
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type WorkerHistory = {
  __typename?: 'WorkerHistory';
  createdBy: User;
  createdDate: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type WorkerInstallationTeam = {
  __typename?: 'WorkerInstallationTeam';
  acronym: Scalars['String']['output'];
  capacity?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  numberOfMembers: Scalars['Int']['output'];
};

export type WorkerIsUsed = {
  __typename?: 'WorkerIsUsed';
  message: Scalars['String']['output'];
};

export type WorkerPosition = {
  __typename?: 'WorkerPosition';
  id: Scalars['Int']['output'];
  isPrimary: Scalars['Boolean']['output'];
  position: Position;
};

export type WorkerStatus = {
  status: Scalars['String']['output'];
};

export type WorkerStatusOnLeave = WorkerStatus & {
  __typename?: 'WorkerStatusOnLeave';
  returnDate: Scalars['Date']['output'];
  status: Scalars['String']['output'];
};

export type WorkerStatusTerminated = WorkerStatus & {
  __typename?: 'WorkerStatusTerminated';
  status: Scalars['String']['output'];
  terminationDate: Scalars['Date']['output'];
};

export type WorkerStatusWorking = WorkerStatus & {
  __typename?: 'WorkerStatusWorking';
  status: Scalars['String']['output'];
};

export type WrongPassword = {
  __typename?: 'WrongPassword';
  message: Scalars['String']['output'];
};

export type AccountsBySpecialAccountsFilters = {
  parentSpecialAccounts?: Array<Scalars['String']['input']>;
  specialAccounts?: Array<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type AccountsFilters = {
  category?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  specialAccount?: InputMaybe<Scalars['String']['input']>;
};

export type AssociateTypesFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AssociatesFilters = {
  category?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type BankTransactionsFilters = {
  accountId: Scalars['Int']['input'];
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type BankTransactionsResponse = {
  __typename?: 'bankTransactionsResponse';
  account: Account;
  balance: Scalars['Float']['output'];
  count?: Maybe<Scalars['Int']['output']>;
  deposits?: Maybe<Scalars['Float']['output']>;
  entries: Array<EntryPreviousBalance>;
  hasMore: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  withdrawals?: Maybe<Scalars['Float']['output']>;
};

export type BankingFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type BillCategoryLineAccountsResponse = {
  __typename?: 'billCategoryLineAccountsResponse';
  assets: Array<Account>;
  expenses: Array<Account>;
};

export type BonusProfilesFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BuildingsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeOwnPasswordInput = {
  password: Scalars['String']['input'];
};

export type ChangeUserPasswordInput = {
  forceChangePassword: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type CheckReceivablesFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};

export type ChildProductByVariationsFilters = {
  brisaProducts?: InputMaybe<Scalars['Boolean']['input']>;
  parentId: Scalars['Int']['input'];
  variations: Array<ChildProductByVariations_Variations_Filters>;
};

export type ChildProductByVariations_Variations_Filters = {
  optionId: Scalars['Int']['input'];
  parentVariationId: Scalars['Int']['input'];
};

export type ChooseCompanyInput = {
  companyId: Scalars['Int']['input'];
};

export type CloneEstimateInput = {
  date: Scalars['String']['input'];
  estimateId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type ClosedPurchaseOrdersFilters = {
  search?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type CommissionProfilesFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CompetitorsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAccountInput = {
  contra?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
  profitAndLoss?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAssociateInput = {
  associateTypeId: Scalars['Int']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  businessId?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  companyIds?: Array<Scalars['Int']['input']>;
  defaultRate?: InputMaybe<Scalars['Float']['input']>;
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  maxRate?: InputMaybe<Scalars['Float']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  payBusiness?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAssociateTypeInput = {
  addCostToSale: Scalars['Boolean']['input'];
  addFinanceCost: Scalars['Boolean']['input'];
  commissionType: Scalars['String']['input'];
  defaultRate?: InputMaybe<Scalars['Float']['input']>;
  itemClassificationIds?: Array<Scalars['Int']['input']>;
  maxRate?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  payoutType: Scalars['String']['input'];
  positionIds?: Array<Scalars['Int']['input']>;
  rateModifier?: InputMaybe<Scalars['Float']['input']>;
  source: Scalars['String']['input'];
  typesOfSales: Array<Scalars['String']['input']>;
};

export type CreateBankingAccountInput = {
  accountNo?: InputMaybe<Scalars['String']['input']>;
  branchNo?: InputMaybe<Scalars['String']['input']>;
  closingDay?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  companyIds: Array<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  openingBalance?: InputMaybe<Scalars['Float']['input']>;
  paymentDay?: InputMaybe<Scalars['Int']['input']>;
  routingNo?: InputMaybe<Scalars['String']['input']>;
  transactionDate?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type CreateBonusProfileInput = {
  byPercentage: Scalars['Boolean']['input'];
  frequency: Scalars['String']['input'];
  name: Scalars['String']['input'];
  startingIn: Scalars['String']['input'];
  thresholds: Array<CreateBonusProfileThresholdsInput>;
  type: Scalars['String']['input'];
};

export type CreateBonusProfileThresholdsInput = {
  goal?: InputMaybe<Scalars['Float']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateBrisaChildProductInput = {
  parentId: Scalars['Int']['input'];
  variations: Array<CreateBrisaChildProductVariationInput>;
};

export type CreateBrisaChildProductVariationInput = {
  optionId: Scalars['Int']['input'];
  parentVariationId: Scalars['Int']['input'];
};

export type CreateBuildingInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  propertyType: Scalars['String']['input'];
  stateId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateCheckPayablePaymentsInput = {
  date: Scalars['String']['input'];
  payableInstallmentIds: Array<Scalars['Int']['input']>;
};

export type CreateCheckReceivableDepositFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateCheckReceivableDepositInput = {
  bankAccountId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreateCheckReceivableDepositFileInput>>;
  receivableInstallmentId: Scalars['Int']['input'];
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};

export type CreateChildProductInput = {
  parentId: Scalars['Int']['input'];
  purchasingPrice?: InputMaybe<Scalars['Float']['input']>;
  variations: Array<CreateChildProductVariationsInput>;
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateChildProductResponse = Product | ProductSkuTaken;

export type CreateChildProductVariationsInput = {
  optionId: Scalars['Int']['input'];
  parentVariationId: Scalars['Int']['input'];
};

export type CreateCommissionProfileInput = {
  commissionBase: Scalars['String']['input'];
  commissionType: Scalars['String']['input'];
  estimatedRate?: InputMaybe<Scalars['Float']['input']>;
  includeAssociateCost: Scalars['Boolean']['input'];
  includeFinancingCost: Scalars['Boolean']['input'];
  includeSubsidizedFinancingCost: Scalars['Boolean']['input'];
  itemClassificationIds: Array<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  positionId: Scalars['Int']['input'];
  priceType: Scalars['String']['input'];
  rate: Scalars['Float']['input'];
  rateModifier: Scalars['Float']['input'];
  tiers?: Array<CreateCommissionProfile_TiersInput>;
  typesOfSales: Array<Scalars['String']['input']>;
};

export type CreateCommissionProfile_TiersInput = {
  limit: Scalars['Float']['input'];
  rate: Scalars['Float']['input'];
};

export type CreateCompanyInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  groupId?: InputMaybe<Scalars['Int']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCompetitorInput = {
  name: Scalars['String']['input'];
  strengths?: InputMaybe<Scalars['String']['input']>;
  weaknesses?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCreditCardPaymentFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateCreditCardPaymentInput = {
  amount: Scalars['Float']['input'];
  bankAccountId: Scalars['Int']['input'];
  cardAccountId: Scalars['Int']['input'];
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  depositDate?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreateCreditCardPaymentFileInput>>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCreditCardTermInput = {
  companyIds?: Array<Scalars['Int']['input']>;
  defaultEstimateDiscount?: InputMaybe<Scalars['Float']['input']>;
  defaultInstallments: Scalars['Int']['input'];
  defaultRequiresDeposit: Scalars['Boolean']['input'];
  depositPercentage?: InputMaybe<Scalars['Float']['input']>;
  depositType: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  interestRates?: InputMaybe<Array<Scalars['Float']['input']>>;
  maxDownPaymentDueIn: Scalars['Int']['input'];
  maximumInstallments: Scalars['Int']['input'];
  minInstallments: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  paymentMethodId: Scalars['Int']['input'];
  subsidizedInterestUpToInstallmentNumber?: InputMaybe<Scalars['Int']['input']>;
  typesOfSales: Array<Scalars['String']['input']>;
};

export type CreateCustomerInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine3?: InputMaybe<Scalars['String']['input']>;
  billingCity?: InputMaybe<Scalars['String']['input']>;
  billingCountryId?: InputMaybe<Scalars['Int']['input']>;
  billingPostal?: InputMaybe<Scalars['String']['input']>;
  billingStateId?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  creditLimit?: InputMaybe<Scalars['Int']['input']>;
  document1?: InputMaybe<Scalars['String']['input']>;
  document2?: InputMaybe<Scalars['String']['input']>;
  documentType1?: InputMaybe<Scalars['String']['input']>;
  documentType2?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  exemptionDetails?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  isTaxExempt?: InputMaybe<Scalars['Boolean']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  noAddress?: InputMaybe<Scalars['Boolean']['input']>;
  openBalance?: InputMaybe<Scalars['Int']['input']>;
  openBalanceDate?: InputMaybe<Scalars['String']['input']>;
  phone1?: InputMaybe<Scalars['String']['input']>;
  phone2?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerSourceInput = {
  name: Scalars['String']['input'];
};

export type CreateEntryClearingInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  date: Scalars['String']['input'];
  entryId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateEstimateInput = {
  date: Scalars['String']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['Int']['input'];
};

export type CreateEstimateItemInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  estimateId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  specifications?: InputMaybe<Scalars['String']['input']>;
};

export type CreateEstimateSubItemInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  estimateItemId: Scalars['Int']['input'];
  pieces: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
  specifications?: InputMaybe<Scalars['String']['input']>;
};

export type CreateExpenseCategoryInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
};

export type CreateExpenseFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateExpenseInput = {
  accountId: Scalars['Int']['input'];
  categories: Array<CreateExpenseCategoryInput>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  depositDate?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreateExpenseFileInput>>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateExternalProductInput = {
  companies: Array<CreateExternalProduct_ProductCompanyInput>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  itemClassificationId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  partnerSupplierId?: InputMaybe<Scalars['Int']['input']>;
  primaryImage?: InputMaybe<Scalars['String']['input']>;
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
  valueToEnter?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
  vendorType: Scalars['String']['input'];
};

export type CreateExternalProductResponse = Product | ProductSkuTaken;

export type CreateExternalProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  markup: Scalars['Float']['input'];
};

export type CreateFinancingTermInput = {
  bankAccountId: Scalars['Int']['input'];
  companyIds?: Array<Scalars['Int']['input']>;
  daysToDeposit: Scalars['Int']['input'];
  defaultEstimateDiscount?: InputMaybe<Scalars['Float']['input']>;
  defaultInstallments: Scalars['Int']['input'];
  defaultRequiresDeposit: Scalars['Boolean']['input'];
  depositPercentage?: InputMaybe<Scalars['Float']['input']>;
  depositType: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  financingAgreementPercentage?: InputMaybe<Scalars['Float']['input']>;
  financingAgreementVendorId?: InputMaybe<Scalars['Int']['input']>;
  financingMethods: Array<Scalars['String']['input']>;
  interestRates: Array<Scalars['Float']['input']>;
  maxDeferredDays: Scalars['Int']['input'];
  maxDownPaymentDueIn: Scalars['Int']['input'];
  maximumInstallments: Scalars['Int']['input'];
  minDeferredDays: Scalars['Int']['input'];
  minInstallments: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  transitAccountId: Scalars['Int']['input'];
  typesOfSales: Array<Scalars['String']['input']>;
};

export type CreateGroupItemInput = {
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  estimateId: Scalars['Int']['input'];
  groupedItemsIds: Array<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateIncomeFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateIncomeInput = {
  amount: Scalars['Float']['input'];
  bankAccountId: Scalars['Int']['input'];
  companyId: Scalars['Int']['input'];
  customerId?: InputMaybe<Scalars['Int']['input']>;
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreateIncomeFileInput>>;
  incomeAccountId: Scalars['Int']['input'];
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInventoryQuantityAdjustmentInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  pieces: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
};

export type CreateItemClassificationInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateLossReasonInput = {
  name: Scalars['String']['input'];
};

export type CreateMoneyInTransitDepositFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateMoneyInTransitDepositInput = {
  bankAccountId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreateMoneyInTransitDepositFileInput>>;
  receivableInstallmentId: Scalars['Int']['input'];
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};

export type CreateParentPriceGroupInput = {
  purchasingPrice: Scalars['Float']['input'];
  vendorPriceGroupId: Scalars['Int']['input'];
};

export type CreateParentProductInput = {
  active: Scalars['Boolean']['input'];
  calculationPerSellingQuantity?: InputMaybe<Scalars['Float']['input']>;
  companies: Array<CreateParentProduct_ProductCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  dimensionsUnit?: InputMaybe<Scalars['String']['input']>;
  displayPieces?: Scalars['Boolean']['input'];
  enteringUnit?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  generatedSku: Scalars['Boolean']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  minimumPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  minimumQuantityForSale?: InputMaybe<Scalars['Float']['input']>;
  multipleOfForSale?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  purchasingEnteringUnit?: InputMaybe<Scalars['String']['input']>;
  purchasingPrice?: InputMaybe<Scalars['Float']['input']>;
  purchasingUnit?: InputMaybe<Scalars['String']['input']>;
  salesCalculationUnit: Scalars['String']['input'];
  sellingPerPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  sellingUnit: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  taxable: Scalars['Boolean']['input'];
  variations: Array<CreateParentVariationsInput>;
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorDescription?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['Int']['input'];
  vendorPriceGroups: Array<CreateParentPriceGroupInput>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weightUnit?: InputMaybe<Scalars['String']['input']>;
};

export type CreateParentProductResponse = Product | ProductSkuTaken;

export type CreateParentProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  markup: Scalars['Float']['input'];
};

export type CreateParentVariationOptionsInput = {
  id: Scalars['Int']['input'];
  priceModifier?: InputMaybe<Scalars['Float']['input']>;
  priceModifierType?: InputMaybe<Scalars['String']['input']>;
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateParentVariationsInput = {
  options: Array<CreateParentVariationOptionsInput>;
  salesFormsName: Scalars['String']['input'];
  variationGroupId?: InputMaybe<Scalars['Int']['input']>;
  variationGroupName?: InputMaybe<Scalars['String']['input']>;
  variationId: Scalars['Int']['input'];
};

export type CreatePartnerSupplierInput = {
  contactName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  integrationId: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  software: Scalars['String']['input'];
};

export type CreatePartnerSupplierIntegrationInput = {
  integrationId: Scalars['String']['input'];
  software: Scalars['String']['input'];
};

export type CreatePayableCategoryInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreatePayableFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreatePayableInput = {
  accountId: Scalars['Int']['input'];
  categories: Array<CreatePayableCategoryInput>;
  companyId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  documentNo?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreatePayableFileInput>>;
  installments: Array<CreatePayableInstallmentInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payeeId?: InputMaybe<Scalars['Int']['input']>;
  payeeType?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePayableInstallmentInput = {
  amount: Scalars['Float']['input'];
  bankAccountId?: InputMaybe<Scalars['Int']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  dueDate: Scalars['String']['input'];
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePayablePaymentBankInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  depositDate?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePayablePaymentFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreatePayablePaymentInput = {
  banks: Array<CreatePayablePaymentBankInput>;
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreatePayablePaymentFileInput>>;
  installments: Array<CreatePayablePaymentInstallmentInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payeeId?: InputMaybe<Scalars['Int']['input']>;
  payeeType?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePayablePaymentInstallmentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  bankAccountId?: InputMaybe<Scalars['Int']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  penalty?: InputMaybe<Scalars['Float']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePaymentMethodInput = {
  bankAccountId?: InputMaybe<Scalars['Int']['input']>;
  daysToDeposit?: InputMaybe<Scalars['Int']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rate?: InputMaybe<Scalars['Int']['input']>;
  transitAccountId?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type CreatePositionInput = {
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreatePriceListInput = {
  name: Scalars['String']['input'];
};

export type CreateProductGroupInput = {
  level: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
  skuPortion?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductTagInput = {
  name: Scalars['String']['input'];
};

export type CreateProjectInput = {
  companyId: Scalars['Int']['input'];
  customerId?: InputMaybe<Scalars['Int']['input']>;
  customerSourceId?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  newCustomerName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  projectGroupId?: InputMaybe<Scalars['Int']['input']>;
  projectName?: InputMaybe<Scalars['String']['input']>;
  workerId: Scalars['Int']['input'];
};

export type CreateProjectRoomInput = {
  name: Scalars['String']['input'];
  projectId: Scalars['Int']['input'];
};

export type CreatePurchaseOrderFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreatePurchaseOrderInput = {
  eta?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreatePurchaseOrderFileInput>>;
  installments: Array<CreatePurchaseOrderInstallmentInput>;
  internalNotes?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<CreatePurchaseOrderItemInput>>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payeeVendorId: Scalars['Int']['input'];
  vendorContactId?: InputMaybe<Scalars['Int']['input']>;
  vendorId: Scalars['Int']['input'];
  vendorNumber?: InputMaybe<Scalars['String']['input']>;
  vendorPaymentTermId?: InputMaybe<Scalars['Int']['input']>;
  warehouseId: Scalars['Int']['input'];
};

export type CreatePurchaseOrderInstallmentInput = {
  amount: Scalars['Float']['input'];
  dueDays: Scalars['Int']['input'];
  stage: Scalars['String']['input'];
};

export type CreatePurchaseOrderItemAllocationInput = {
  estimateEmbeddedItemId?: InputMaybe<Scalars['Float']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
};

export type CreatePurchaseOrderItemInput = {
  allocations: Array<CreatePurchaseOrderItemAllocationInput>;
  dimension1?: InputMaybe<Scalars['Int']['input']>;
  dimension2?: InputMaybe<Scalars['Int']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pieces: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['Int']['input'];
};

export type CreateReceivableCategoryInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReceivableFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateReceivableInput = {
  categories: Array<CreateReceivableCategoryInput>;
  companyId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  documentNo?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreateReceivableFileInput>>;
  installments: Array<CreateReceivableInstallmentInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payeeId: Scalars['Int']['input'];
  payeeType: Scalars['String']['input'];
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReceivableInstallmentInput = {
  amount: Scalars['Float']['input'];
  bankAccountId?: InputMaybe<Scalars['Int']['input']>;
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankBranchNo?: InputMaybe<Scalars['String']['input']>;
  bankCode?: InputMaybe<Scalars['String']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  dueDate: Scalars['String']['input'];
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReceivablePaymentBankInput = {
  accountId?: InputMaybe<Scalars['Int']['input']>;
  amount: Scalars['Float']['input'];
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankBranchNo?: InputMaybe<Scalars['String']['input']>;
  bankCode?: InputMaybe<Scalars['String']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  depositDate?: InputMaybe<Scalars['String']['input']>;
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReceivablePaymentFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateReceivablePaymentInput = {
  banks: Array<CreateReceivablePaymentBankInput>;
  date: Scalars['String']['input'];
  files?: InputMaybe<Array<CreateReceivablePaymentFileInput>>;
  installments: Array<CreateReceivablePaymentInstallmentInput>;
  memo?: InputMaybe<Scalars['String']['input']>;
  payeeId?: InputMaybe<Scalars['Int']['input']>;
  payeeType?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReceivablePaymentInstallmentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  penalty?: InputMaybe<Scalars['Float']['input']>;
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRoleInput = {
  name: Scalars['String']['input'];
};

export type CreateSaleOrderInput = {
  estimateId: Scalars['Int']['input'];
};

export type CreateSalesAgreementInput = {
  content: Scalars['JSON']['input'];
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type CreateSalesTaxInput = {
  agency?: InputMaybe<Scalars['String']['input']>;
  applyOnProducts: Scalars['Boolean']['input'];
  applyOnServices: Scalars['Boolean']['input'];
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  rate: Scalars['Float']['input'];
  taxNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateServiceInput = {
  active: Scalars['Boolean']['input'];
  applyServiceOnServices?: InputMaybe<Scalars['Boolean']['input']>;
  companies: Array<CreateServiceProduct_ProductCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  incomeAccountId: Scalars['Int']['input'];
  itemClassificationId?: InputMaybe<Scalars['Int']['input']>;
  minimumChargeAmount?: InputMaybe<Scalars['String']['input']>;
  minimumPurchasingAmount?: InputMaybe<Scalars['Float']['input']>;
  minimumSellingAmount?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  purchasingPrice?: InputMaybe<Scalars['Float']['input']>;
  sellingUnit: Scalars['String']['input'];
  serviceChargingType: Scalars['String']['input'];
  serviceType: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  specifications?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  taxable: Scalars['Boolean']['input'];
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorDescription?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
  vendorType: Scalars['String']['input'];
  zeroMarkup: Scalars['Boolean']['input'];
};

export type CreateServiceProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
};

export type CreateServiceResponse = Product | ProductSkuTaken;

export type CreateStandardProductInput = {
  active: Scalars['Boolean']['input'];
  barcode?: InputMaybe<Scalars['String']['input']>;
  calculationPerSellingQuantity?: InputMaybe<Scalars['Float']['input']>;
  companies: Array<CreateStandardProduct_ProductCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  dimensionsUnit?: InputMaybe<Scalars['String']['input']>;
  displayPieces?: Scalars['Boolean']['input'];
  enteringUnit?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  generatedSku: Scalars['Boolean']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  minimumPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  minimumQuantityForSale?: InputMaybe<Scalars['Float']['input']>;
  multipleOfForSale?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  openingInventory?: InputMaybe<Array<CreateStandardProductOpeningInventoryInput>>;
  openingInventoryDate?: InputMaybe<Scalars['String']['input']>;
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  purchasingEnteringUnit?: InputMaybe<Scalars['String']['input']>;
  purchasingPrice: Scalars['Float']['input'];
  purchasingUnit?: InputMaybe<Scalars['String']['input']>;
  reorderPoint?: InputMaybe<Scalars['Float']['input']>;
  salesCalculationUnit: Scalars['String']['input'];
  sellingPerPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  sellingUnit: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  taxable: Scalars['Boolean']['input'];
  tracksInventory: Scalars['Boolean']['input'];
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorDescription?: InputMaybe<Scalars['String']['input']>;
  vendorId: Scalars['Int']['input'];
  weight?: InputMaybe<Scalars['Int']['input']>;
  weightUnit?: InputMaybe<Scalars['String']['input']>;
};

export type CreateStandardProductOpeningInventoryInput = {
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  pieces: Scalars['Float']['input'];
  unitPrice: Scalars['Float']['input'];
  warehouseId: Scalars['Int']['input'];
};

export type CreateStandardProductResponse = Product | ProductSkuTaken;

export type CreateStandardProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
};

export type CreateTeamInput = {
  abbreviation: Scalars['String']['input'];
  companyId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
};

export type CreateTemplateEstimateEmbeddedItemInput = {
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  estimateId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
  pieces: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  value: Scalars['Float']['input'];
};

export type CreateTemplateEstimateItemInput = {
  date: Scalars['String']['input'];
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  estimateId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
  pieces: Scalars['Int']['input'];
  productId: Scalars['Int']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
  specifications?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['Float']['input'];
};

export type CreateTemplateProductInput = {
  active: Scalars['Boolean']['input'];
  companies: Array<CreateTemplateProduct_ProductCompanyInput>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  itemClassificationId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  sellingUnit: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  specifications?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  taxable: Scalars['Boolean']['input'];
  type: Scalars['String']['input'];
  valueToEnter: Scalars['String']['input'];
  vendorId?: InputMaybe<Scalars['Int']['input']>;
  vendorType: Scalars['String']['input'];
};

export type CreateTemplateProductResponse = Product | ProductSkuTaken;

export type CreateTemplateProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  markup: Scalars['Float']['input'];
};

export type CreateTermInput = {
  companyIds?: Array<Scalars['Int']['input']>;
  defaultEstimateDiscount?: InputMaybe<Scalars['Float']['input']>;
  defaultInstallments: Scalars['Int']['input'];
  defaultRequiresDeposit: Scalars['Boolean']['input'];
  depositPercentage?: InputMaybe<Scalars['Float']['input']>;
  depositType: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  dueIn: Scalars['Int']['input'];
  dueInType: Scalars['String']['input'];
  interestRates?: InputMaybe<Array<Scalars['Float']['input']>>;
  maxDownPaymentDueIn: Scalars['Int']['input'];
  maximumInstallments: Scalars['Int']['input'];
  minInstallments: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  rate?: InputMaybe<Scalars['Float']['input']>;
  typesOfSales: Array<Scalars['String']['input']>;
};

export type CreateTraderInput = {
  displayName: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateTransactionHistoryCommentInput = {
  comment: Scalars['String']['input'];
  transactionId: Scalars['Int']['input'];
};

export type CreateTransferFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateTransferInput = {
  amount: Scalars['Float']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreateTransferFileInput>>;
  fromAccountId: Scalars['Int']['input'];
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  toAccountId: Scalars['Int']['input'];
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  companyIds: Array<Scalars['Int']['input']>;
  defaultCompanyId?: InputMaybe<Scalars['Int']['input']>;
  forceChangePassword: Scalars['Boolean']['input'];
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
};

export type CreateUserResponse = EmailTaken | User;

export type CreateVariationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  usesPriceGroup: Scalars['Boolean']['input'];
  vendorId: Scalars['Int']['input'];
};

export type CreateVariationOptionInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  variationId: Scalars['Int']['input'];
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateVariationOptionResponse = VariationOptionCodeTaken | CreateVariationOptionSuccess;

export type CreateVariationOptionSuccess = {
  __typename?: 'createVariationOptionSuccess';
  option: VariationOption;
  variation: Variation;
};

export type CreateVendorContactInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVendorInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  businessIdNo?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<Array<CreateVendorContactInput>>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  document1?: InputMaybe<Scalars['String']['input']>;
  document2?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  landedCosts?: InputMaybe<Array<CreateVendor_VendorLandedCostInput>>;
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  leadTimeType?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  paymentTerms?: InputMaybe<Array<CreateVendor_PaymentTermInput>>;
  phone1?: InputMaybe<Scalars['String']['input']>;
  phone2?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  purchaseOrderEmail?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  salesOrderEmail?: InputMaybe<Scalars['String']['input']>;
  skuPortion?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
  vendorCompanyCode?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVendorPaymentTermInput = {
  installments: Array<CreateVendorPaymentTermInstallmentsInput>;
  name: Scalars['String']['input'];
  priceModifier: Scalars['Float']['input'];
  vendorId: Scalars['Int']['input'];
};

export type CreateVendorPaymentTermInstallmentInput = {
  dueDays: Scalars['Int']['input'];
  share: Scalars['Float']['input'];
  stage: Scalars['String']['input'];
};

export type CreateVendorPaymentTermInstallmentsInput = {
  dueDays: Scalars['Int']['input'];
  share: Scalars['Float']['input'];
  stage: Scalars['String']['input'];
};

export type CreateVendorPaymentTermInstallmentsResponse = {
  __typename?: 'createVendorPaymentTermInstallmentsResponse';
  vendor: Vendor;
  vendorPaymentTerm: VendorPaymentTerm;
};

export type CreateVendorPriceGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  vendorId: Scalars['Int']['input'];
};

export type CreateVendor_PaymentTermInput = {
  installments: Array<CreateVendorPaymentTermInstallmentInput>;
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceModifier: Scalars['Float']['input'];
};

export type CreateVendor_VendorLandedCostInput = {
  accountId: Scalars['Int']['input'];
  addToProducts: Scalars['Boolean']['input'];
  amount: Scalars['Float']['input'];
  amountType: Scalars['String']['input'];
};

export type CreateWarehouseInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  postal?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWarehouseLocationInput = {
  name: Scalars['String']['input'];
  warehouseId: Scalars['Int']['input'];
};

export type CreateWorkerCompanyInput = {
  companyId: Scalars['Int']['input'];
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateWorkerFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type CreateWorkerInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  commissionProfileIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  companies: Array<CreateWorkerCompanyInput>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  contractorType?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employeeNumber?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<CreateWorkerFileInput>>;
  forceChangePassword?: InputMaybe<Scalars['Boolean']['input']>;
  groupUserId?: InputMaybe<Scalars['Int']['input']>;
  hiredDate?: InputMaybe<Scalars['DateTime']['input']>;
  installationTeams?: InputMaybe<Array<CreateWorkerInstallationTeam>>;
  login?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  positions: Array<CreateWorkerPositionInput>;
  postal?: InputMaybe<Scalars['String']['input']>;
  releasedDate?: InputMaybe<Scalars['DateTime']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  teamIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  type: Scalars['String']['input'];
  userCompanyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  usesInstallationTeams?: InputMaybe<Scalars['Boolean']['input']>;
  wageAmount?: InputMaybe<Scalars['Float']['input']>;
  wageFrequency?: InputMaybe<Scalars['String']['input']>;
  wageNextPayday?: InputMaybe<Scalars['String']['input']>;
  wageType?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkerInstallationTeam = {
  acronym: Scalars['String']['input'];
  capacity?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  numberOfMembers: Scalars['Int']['input'];
};

export type CreateWorkerPositionInput = {
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  positionId: Scalars['Int']['input'];
};

export type CustomerSourcesFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type CustomersFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteAccountInput = {
  id: Scalars['Int']['input'];
};

export type DeleteAssociateInput = {
  id: Scalars['Int']['input'];
};

export type DeleteAssociateTypeInput = {
  id: Scalars['Int']['input'];
};

export type DeleteAssociateTypeResponse = AssociateTypeOccupied | DeleteResponse;

export type DeleteBonusProfileInput = {
  id: Scalars['Int']['input'];
};

export type DeleteBonusProfileResponse = BonusProfileOccupied | DeleteResponse;

export type DeleteCommissionProfileInput = {
  id: Scalars['Int']['input'];
};

export type DeleteCommissionProfileResponse = CommissionProfileOccupied | DeleteResponse;

export type DeleteDepositTransactionInput = {
  transactionId: Scalars['Int']['input'];
};

export type DeleteEntryClearingInput = {
  clearingId: Scalars['String']['input'];
  entryId: Scalars['Int']['input'];
};

export type DeleteEstimateEmbeddedItemInput = {
  date: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type DeleteEstimateInput = {
  id: Scalars['Int']['input'];
};

export type DeleteEstimateItemInput = {
  date: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type DeletePayablePaymentsInput = {
  reason: Scalars['String']['input'];
  settlementIds: Array<Scalars['Int']['input']>;
};

export type DeletePayablesInput = {
  ids: Array<Scalars['Int']['input']>;
};

export type DeletePaymentMethodInput = {
  id: Scalars['Int']['input'];
};

export type DeletePaymentMethodResponse = DeleteResponse | PaymentMethodIsUsed;

export type DeletePositionInput = {
  id: Scalars['Int']['input'];
};

export type DeletePositionResponse = DeleteResponse | PositionOccupied;

export type DeletePriceListInput = {
  id: Scalars['Int']['input'];
};

export type DeleteProductGroupInput = {
  id: Scalars['Int']['input'];
};

export type DeleteProjectInput = {
  id: Scalars['Int']['input'];
};

export type DeleteReceivablePaymentsInput = {
  reason: Scalars['String']['input'];
  settlementIds: Array<Scalars['Int']['input']>;
};

export type DeleteReceivablesInput = {
  ids: Array<Scalars['Int']['input']>;
};

export type DeleteRoleInput = {
  id: Scalars['Int']['input'];
};

export type DeleteRoleResponse = DeleteResponse | RoleOccupied;

export type DeleteTeamInput = {
  id: Scalars['Int']['input'];
};

export type DeleteTermInput = {
  id: Scalars['Int']['input'];
};

export type DeleteTransactionHistoryCommentInput = {
  transactionHistoryId: Scalars['Int']['input'];
};

export type DeleteTransactionsInput = {
  transactionIds: Array<Scalars['Int']['input']>;
};

export type DeleteUserInput = {
  id: Scalars['Int']['input'];
};

export type DeleteWarehouseLocationInput = {
  warehouseLocationId: Scalars['Int']['input'];
};

export type DeleteWorkerInput = {
  deleteUser?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};

export type DeliveryServicesFilters = {
  companyId: Scalars['Int']['input'];
};

export type DrawerProductsFilters = {
  brisaProducts?: InputMaybe<Scalars['Boolean']['input']>;
  companyId: Scalars['Int']['input'];
  inputs: Array<Scalars['String']['input']>;
  page?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
  templateProducts?: InputMaybe<Scalars['Boolean']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type DrawerServicesFilters = {
  chargingTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  companyId: Scalars['Int']['input'];
  inputs: Array<Scalars['String']['input']>;
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
};

export type DuplicateRoleInput = {
  duplicateId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditAccountInput = {
  contra?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['Int']['input']>;
  profitAndLoss?: InputMaybe<Scalars['String']['input']>;
};

export type EditAssociateInput = {
  associateTypeId: Scalars['Int']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['String']['input']>;
  businessId?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  companyIds: Array<Scalars['Int']['input']>;
  defaultRate?: InputMaybe<Scalars['Float']['input']>;
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  maxRate?: InputMaybe<Scalars['Float']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  payBusiness?: InputMaybe<Scalars['Boolean']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type EditAssociateTypeInput = {
  addCostToSale: Scalars['Boolean']['input'];
  addFinanceCost: Scalars['Boolean']['input'];
  commissionType: Scalars['String']['input'];
  defaultRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Int']['input'];
  itemClassificationIds?: Array<Scalars['Int']['input']>;
  maxRate?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  payoutType: Scalars['String']['input'];
  positionIds?: Array<Scalars['Int']['input']>;
  rateModifier?: InputMaybe<Scalars['Float']['input']>;
  source: Scalars['String']['input'];
  typesOfSales: Array<Scalars['String']['input']>;
};

export type EditBankSlipReceivableFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditBankSlipReceivableInput = {
  addComments?: InputMaybe<Array<Scalars['String']['input']>>;
  deleteComments?: InputMaybe<Array<Scalars['Int']['input']>>;
  dueDate: Scalars['String']['input'];
  files?: InputMaybe<Array<EditBankSlipReceivableFileInput>>;
  receivableId: Scalars['Int']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditBankingAccountInput = {
  accountNo?: InputMaybe<Scalars['String']['input']>;
  branchNo?: InputMaybe<Scalars['String']['input']>;
  closingDay?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  companyIds: Array<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  openingBalance?: InputMaybe<Scalars['Float']['input']>;
  paymentDay?: InputMaybe<Scalars['Int']['input']>;
  routingNo?: InputMaybe<Scalars['String']['input']>;
  transactionDate?: InputMaybe<Scalars['String']['input']>;
};

export type EditBonusProfileInput = {
  byPercentage: Scalars['Boolean']['input'];
  frequency: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  thresholds: Array<EditBonusProfileThresholdsInput>;
  type: Scalars['String']['input'];
};

export type EditBonusProfileThresholdsInput = {
  goal: Scalars['Float']['input'];
  rate: Scalars['Float']['input'];
};

export type EditBuildingInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contactName?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  propertyType: Scalars['String']['input'];
  stateId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditCheckPayableFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditCheckPayableInput = {
  accountId: Scalars['Int']['input'];
  addComments?: InputMaybe<Array<Scalars['String']['input']>>;
  checkNumber: Scalars['String']['input'];
  deleteComments?: InputMaybe<Array<Scalars['Int']['input']>>;
  dueDate: Scalars['String']['input'];
  files?: InputMaybe<Array<EditCheckPayableFileInput>>;
  payableId: Scalars['Int']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditCheckReceivableFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditCheckReceivableInput = {
  addComments?: InputMaybe<Array<Scalars['String']['input']>>;
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankBranchNo?: InputMaybe<Scalars['String']['input']>;
  bankCode?: InputMaybe<Scalars['String']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  deleteComments?: InputMaybe<Array<Scalars['Int']['input']>>;
  dueDate: Scalars['String']['input'];
  files?: InputMaybe<Array<EditCheckReceivableFileInput>>;
  receivableId: Scalars['Int']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditChildProductInput = {
  active: Scalars['Boolean']['input'];
  barcode?: InputMaybe<Scalars['String']['input']>;
  calculationPerSellingQuantity?: InputMaybe<Scalars['Float']['input']>;
  companies: Array<EditChildProduct_ProductCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  dimensionsUnit?: InputMaybe<Scalars['String']['input']>;
  displayPieces?: Scalars['Boolean']['input'];
  enteringUnit?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  minimumPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  minimumQuantityForSale?: InputMaybe<Scalars['Float']['input']>;
  multipleOfForSale?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  openingInventory?: InputMaybe<Array<EditChildProductOpeningInventoryInput>>;
  openingInventoryDate?: InputMaybe<Scalars['String']['input']>;
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  purchasingEnteringUnit?: InputMaybe<Scalars['String']['input']>;
  purchasingPrice?: InputMaybe<Scalars['Float']['input']>;
  purchasingUnit?: InputMaybe<Scalars['String']['input']>;
  reorderPoint?: InputMaybe<Scalars['Float']['input']>;
  salesCalculationUnit: Scalars['String']['input'];
  sellingPerPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  sellingUnit: Scalars['String']['input'];
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  taxable: Scalars['Boolean']['input'];
  tracksInventory: Scalars['Boolean']['input'];
  updateEstimateItems: Scalars['Boolean']['input'];
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorDescription?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weightUnit?: InputMaybe<Scalars['String']['input']>;
};

export type EditChildProductOpeningInventoryInput = {
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  pieces: Scalars['Float']['input'];
  unitPrice: Scalars['Float']['input'];
  warehouseId: Scalars['Int']['input'];
};

export type EditChildProductResponse = Product | ProductSkuTaken;

export type EditChildProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
};

export type EditCommissionProfileInput = {
  commissionBase: Scalars['String']['input'];
  commissionType: Scalars['String']['input'];
  estimatedRate?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Int']['input'];
  includeAssociateCost: Scalars['Boolean']['input'];
  includeFinancingCost: Scalars['Boolean']['input'];
  includeSubsidizedFinancingCost: Scalars['Boolean']['input'];
  itemClassificationIds: Array<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  positionId: Scalars['Int']['input'];
  priceType: Scalars['String']['input'];
  rate: Scalars['Float']['input'];
  rateModifier: Scalars['Float']['input'];
  tiers?: Array<EditCommissionProfile_TiersInput>;
  typesOfSales: Array<Scalars['String']['input']>;
};

export type EditCommissionProfile_TiersInput = {
  limit: Scalars['Float']['input'];
  rate: Scalars['Float']['input'];
};

export type EditCompetitorInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  strengths?: InputMaybe<Scalars['String']['input']>;
  weaknesses?: InputMaybe<Scalars['String']['input']>;
};

export type EditCreditCardPaymentFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditCreditCardPaymentInput = {
  amount: Scalars['Float']['input'];
  bankAccountId: Scalars['Int']['input'];
  cardAccountId: Scalars['Int']['input'];
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  depositDate?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<EditCreditCardPaymentFileInput>>;
  id: Scalars['Int']['input'];
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditCreditCardTermInput = {
  companyIds?: Array<Scalars['Int']['input']>;
  defaultEstimateDiscount?: InputMaybe<Scalars['Float']['input']>;
  defaultInstallments: Scalars['Int']['input'];
  defaultRequiresDeposit: Scalars['Boolean']['input'];
  depositPercentage?: InputMaybe<Scalars['Float']['input']>;
  depositType: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  interestRates: Array<Scalars['Float']['input']>;
  maxDownPaymentDueIn: Scalars['Int']['input'];
  maximumInstallments: Scalars['Int']['input'];
  minInstallments: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  paymentMethodId: Scalars['Int']['input'];
  subsidizedInterestUpToInstallmentNumber?: InputMaybe<Scalars['Int']['input']>;
  typesOfSales: Array<Scalars['String']['input']>;
};

export type EditCustomerInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine3?: InputMaybe<Scalars['String']['input']>;
  billingCity?: InputMaybe<Scalars['String']['input']>;
  billingCountryId?: InputMaybe<Scalars['Int']['input']>;
  billingPostal?: InputMaybe<Scalars['String']['input']>;
  billingStateId?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  creditLimit?: InputMaybe<Scalars['Int']['input']>;
  document1?: InputMaybe<Scalars['String']['input']>;
  document2?: InputMaybe<Scalars['String']['input']>;
  documentType1?: InputMaybe<Scalars['String']['input']>;
  documentType2?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  exemptionDetails?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  isTaxExempt?: InputMaybe<Scalars['Boolean']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  openBalance?: InputMaybe<Scalars['Int']['input']>;
  openBalanceDate?: InputMaybe<Scalars['String']['input']>;
  phone1?: InputMaybe<Scalars['String']['input']>;
  phone2?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type EditCustomerSourceInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditEntryClearingInput = {
  amount: Scalars['Float']['input'];
  clearingId: Scalars['String']['input'];
  date: Scalars['String']['input'];
  entryId: Scalars['Int']['input'];
};

export type EditEstimateDeliveryServiceInput = {
  deliveryServiceId?: InputMaybe<Scalars['Int']['input']>;
  estimateId: Scalars['Int']['input'];
};

export type EditEstimateDepositPercentageInput = {
  date: Scalars['String']['input'];
  depositPercentage: Scalars['Float']['input'];
  estimateId: Scalars['Int']['input'];
};

export type EditEstimateEmbeddedItemServiceBasePriceInput = {
  basePrice: Scalars['Float']['input'];
  estimateEmbeddedItemId: Scalars['Int']['input'];
};

export type EditEstimateInstallationServiceAmountInput = {
  date: Scalars['String']['input'];
  estimateId: Scalars['Int']['input'];
  installationServiceAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type EditEstimateInstallationServiceInput = {
  estimateId: Scalars['Int']['input'];
  installationServiceId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditEstimateInstallmentAmountInput = {
  amount: Scalars['Float']['input'];
  estimateInstallmentId: Scalars['Int']['input'];
};

export type EditEstimateInstallmentDueDateInput = {
  dueDate: Scalars['String']['input'];
  estimateInstallmentId: Scalars['Int']['input'];
};

export type EditEstimateInstallmentPaymentMethodInput = {
  estimateInstallmentId: Scalars['Int']['input'];
  paymentMethodId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditEstimateInstallmentsRemarksInput = {
  checkNumber?: InputMaybe<Scalars['Int']['input']>;
  depositDate?: InputMaybe<Scalars['String']['input']>;
  estimateInstallmentId: Scalars['Int']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditEstimateItemDescriptionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  estimateItemId: Scalars['Int']['input'];
};

export type EditEstimateItemNameInput = {
  estimateItemId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditEstimateItemRoomInput = {
  estimateItemId: Scalars['Int']['input'];
  roomId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditEstimateItemSpecificationsInput = {
  estimateItemId: Scalars['Int']['input'];
  specifications?: InputMaybe<Scalars['String']['input']>;
};

export type EditEstimateNameInput = {
  estimateId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditEstimateNumberOfInstallmentsInput = {
  dueDate: Scalars['String']['input'];
  estimateId: Scalars['Int']['input'];
  numberOfInstallments: Scalars['Int']['input'];
};

export type EditEstimateRequiresDepositInput = {
  date: Scalars['String']['input'];
  estimateId: Scalars['Int']['input'];
  requiresDeposit: Scalars['Boolean']['input'];
};

export type EditEstimateSalesTaxInput = {
  date: Scalars['String']['input'];
  estimateId: Scalars['Int']['input'];
  salesTaxId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditEstimateTermInput = {
  dueDate: Scalars['String']['input'];
  estimateId: Scalars['Int']['input'];
  termId: Scalars['Int']['input'];
};

export type EditExpenseCategoryInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  memo?: InputMaybe<Scalars['String']['input']>;
};

export type EditExpenseFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditExpenseInput = {
  accountId: Scalars['Int']['input'];
  categories: Array<EditExpenseCategoryInput>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  depositDate?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<EditExpenseFileInput>>;
  id: Scalars['Int']['input'];
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditExternalProductImageInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  url: Scalars['String']['input'];
};

export type EditExternalProductInput = {
  companies: Array<EditExternalProduct_ProductCompanyInput>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  itemClassificationId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  partnerSupplierId?: InputMaybe<Scalars['Int']['input']>;
  primaryImage?: InputMaybe<Scalars['String']['input']>;
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  updateEstimateItems: Scalars['Boolean']['input'];
  valueToEnter?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
  vendorType: Scalars['String']['input'];
};

export type EditExternalProductResponse = Product | ProductSkuTaken;

export type EditExternalProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  markup: Scalars['Float']['input'];
};

export type EditFinancingTermInput = {
  bankAccountId: Scalars['Int']['input'];
  companyIds?: Array<Scalars['Int']['input']>;
  daysToDeposit: Scalars['Int']['input'];
  defaultEstimateDiscount?: InputMaybe<Scalars['Float']['input']>;
  defaultInstallments: Scalars['Int']['input'];
  defaultRequiresDeposit: Scalars['Boolean']['input'];
  depositPercentage?: InputMaybe<Scalars['Float']['input']>;
  depositType: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  financingAgreementPercentage?: InputMaybe<Scalars['Float']['input']>;
  financingAgreementVendorId?: InputMaybe<Scalars['Int']['input']>;
  financingMethods: Array<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  interestRates: Array<Scalars['Float']['input']>;
  maxDeferredDays: Scalars['Int']['input'];
  maxDownPaymentDueIn: Scalars['Int']['input'];
  maximumInstallments: Scalars['Int']['input'];
  minDeferredDays: Scalars['Int']['input'];
  minInstallments: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  transitAccountId: Scalars['Int']['input'];
  typesOfSales: Array<Scalars['String']['input']>;
};

export type EditIncomeFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditIncomeInput = {
  amount: Scalars['Float']['input'];
  bankAccountId: Scalars['Int']['input'];
  companyId: Scalars['Int']['input'];
  customerId?: InputMaybe<Scalars['Int']['input']>;
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<EditIncomeFileInput>>;
  id: Scalars['Int']['input'];
  incomeAccountId: Scalars['Int']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditLossReasonInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditMoneyInTransitReceivableFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditMoneyInTransitReceivableInput = {
  addComments?: InputMaybe<Array<Scalars['String']['input']>>;
  bankAccountId: Scalars['Int']['input'];
  deleteComments?: InputMaybe<Array<Scalars['Int']['input']>>;
  dueDate: Scalars['String']['input'];
  files?: InputMaybe<Array<EditMoneyInTransitReceivableFileInput>>;
  receivableId: Scalars['Int']['input'];
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditParentPriceGroupInput = {
  purchasingPrice: Scalars['Float']['input'];
  vendorPriceGroupId: Scalars['Int']['input'];
};

export type EditParentProductInput = {
  calculationPerSellingQuantity?: InputMaybe<Scalars['Float']['input']>;
  companies: Array<EditParentProduct_ProductCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  dimensionsUnit?: InputMaybe<Scalars['String']['input']>;
  displayPieces?: Scalars['Boolean']['input'];
  enteringUnit?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  generatedSku: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  minimumPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  minimumQuantityForSale?: InputMaybe<Scalars['Float']['input']>;
  multipleOfForSale?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  purchasingEnteringUnit?: InputMaybe<Scalars['String']['input']>;
  purchasingPrice?: InputMaybe<Scalars['Float']['input']>;
  purchasingUnit?: InputMaybe<Scalars['String']['input']>;
  salesCalculationUnit: Scalars['String']['input'];
  sellingPerPurchasingQuantity?: InputMaybe<Scalars['Float']['input']>;
  sellingUnit: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  taxable: Scalars['Boolean']['input'];
  updateChildren: Scalars['Boolean']['input'];
  updateEstimateItems: Scalars['Boolean']['input'];
  variations: Array<EditParentVariationsInput>;
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorDescription?: InputMaybe<Scalars['String']['input']>;
  vendorPriceGroups: Array<EditParentPriceGroupInput>;
  weight?: InputMaybe<Scalars['Float']['input']>;
  weightUnit?: InputMaybe<Scalars['String']['input']>;
};

export type EditParentProductResponse = Product | ProductSkuTaken;

export type EditParentProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  markup: Scalars['Float']['input'];
};

export type EditParentVariationOptionsInput = {
  id: Scalars['Int']['input'];
  priceModifier?: InputMaybe<Scalars['Float']['input']>;
  priceModifierType?: InputMaybe<Scalars['String']['input']>;
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditParentVariationsInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  options: Array<EditParentVariationOptionsInput>;
  salesFormsName: Scalars['String']['input'];
  variationGroupId?: InputMaybe<Scalars['Int']['input']>;
  variationGroupName?: InputMaybe<Scalars['String']['input']>;
  variationId: Scalars['Int']['input'];
};

export type EditPartnerSupplierInput = {
  contactName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  integrationId: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  software: Scalars['String']['input'];
};

export type EditPayableCategoryInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditPayableDeletePaymentInput = {
  reason: Scalars['String']['input'];
  transactionId: Scalars['Int']['input'];
};

export type EditPayableFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditPayableInput = {
  accountId: Scalars['Int']['input'];
  addComments?: InputMaybe<Array<Scalars['String']['input']>>;
  categories: Array<EditPayableCategoryInput>;
  companyId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  deleteComments?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletePayments?: InputMaybe<Array<EditPayableDeletePaymentInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  documentNo?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<EditPayableFileInput>>;
  installments: Array<EditPayableInstallmentInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payableId: Scalars['Int']['input'];
  payeeId?: InputMaybe<Scalars['Int']['input']>;
  payeeType?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};

export type EditPayableInstallmentInput = {
  amount: Scalars['Float']['input'];
  bankAccountId?: InputMaybe<Scalars['Int']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  dueDate: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditPayablePaymentBankInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  depositDate?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditPayablePaymentFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditPayablePaymentInput = {
  banks: Array<EditPayablePaymentBankInput>;
  date: Scalars['String']['input'];
  files?: InputMaybe<Array<EditPayablePaymentFileInput>>;
  installments: Array<EditPayablePaymentInstallmentInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payeeId?: InputMaybe<Scalars['Int']['input']>;
  payeeType?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['Int']['input'];
};

export type EditPayablePaymentInstallmentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  bankAccountId?: InputMaybe<Scalars['Int']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  deletionReason?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  penalty?: InputMaybe<Scalars['Float']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditPaymentMethodInput = {
  bankAccountId?: InputMaybe<Scalars['Int']['input']>;
  daysToDeposit?: InputMaybe<Scalars['Int']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  rate?: InputMaybe<Scalars['Int']['input']>;
  transitAccountId?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};

export type EditPositionInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditPriceListInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditProductGroupInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  skuPortion?: InputMaybe<Scalars['String']['input']>;
};

export type EditProductOpeningInventoryOpeningInventoryInput = {
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  pieces?: InputMaybe<Scalars['Float']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
  warehouseId: Scalars['Int']['input'];
};

export type EditProfileInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  currentPassword?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type EditProfileResponse = EmailTaken | User | WrongPassword;

export type EditPurchaseOrderFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditPurchaseOrderInput = {
  addComments?: InputMaybe<Array<Scalars['String']['input']>>;
  deleteComments?: InputMaybe<Array<Scalars['Int']['input']>>;
  eta?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<EditPurchaseOrderFileInput>>;
  installments: Array<EditPurchaseOrderInstallmentInput>;
  internalNotes?: InputMaybe<Scalars['String']['input']>;
  issuedDate?: InputMaybe<Scalars['String']['input']>;
  items: Array<EditPurchaseOrderItemInput>;
  nextStep?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payeeVendorId: Scalars['Int']['input'];
  purchaseOrderId: Scalars['Int']['input'];
  vendorContactId?: InputMaybe<Scalars['Int']['input']>;
  vendorNumber?: InputMaybe<Scalars['String']['input']>;
  vendorPaymentTermId?: InputMaybe<Scalars['Int']['input']>;
  warehouseId: Scalars['Int']['input'];
};

export type EditPurchaseOrderInstallmentInput = {
  amount: Scalars['Float']['input'];
  dueDays: Scalars['Int']['input'];
  stage: Scalars['String']['input'];
};

export type EditPurchaseOrderItemAllocationInput = {
  estimateEmbeddedItemId?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Float']['input'];
};

export type EditPurchaseOrderItemInput = {
  allocations?: InputMaybe<Array<EditPurchaseOrderItemAllocationInput>>;
  dimension1?: InputMaybe<Scalars['Int']['input']>;
  dimension2?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  pieces: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['Int']['input'];
};

export type EditReceivableCategoryInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditReceivableDeletePaymentInput = {
  reason: Scalars['String']['input'];
  transactionId: Scalars['Int']['input'];
};

export type EditReceivableFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditReceivableInput = {
  accountId: Scalars['Int']['input'];
  addComments?: InputMaybe<Array<Scalars['String']['input']>>;
  categories: Array<EditReceivableCategoryInput>;
  companyId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  deleteComments?: InputMaybe<Array<Scalars['Int']['input']>>;
  deletePayments?: InputMaybe<Array<EditReceivableDeletePaymentInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  documentNo?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<EditReceivableFileInput>>;
  installments: Array<EditReceivableInstallmentInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  payeeId: Scalars['Int']['input'];
  payeeType: Scalars['String']['input'];
  receivableId: Scalars['Int']['input'];
  referenceNo?: InputMaybe<Scalars['String']['input']>;
};

export type EditReceivableInstallmentInput = {
  amount: Scalars['Float']['input'];
  bankAccountId?: InputMaybe<Scalars['Int']['input']>;
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankBranchNo?: InputMaybe<Scalars['String']['input']>;
  bankCode?: InputMaybe<Scalars['String']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  dueDate: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditReceivablePaymentBankInput = {
  accountId?: InputMaybe<Scalars['Int']['input']>;
  amount: Scalars['Float']['input'];
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankBranchNo?: InputMaybe<Scalars['String']['input']>;
  bankCode?: InputMaybe<Scalars['String']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  depositDate?: InputMaybe<Scalars['String']['input']>;
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditReceivablePaymentFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditReceivablePaymentInput = {
  banks: Array<EditReceivablePaymentBankInput>;
  date: Scalars['String']['input'];
  files?: InputMaybe<Array<EditReceivablePaymentFileInput>>;
  installments: Array<EditReceivablePaymentInstallmentInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  transactionId: Scalars['Int']['input'];
};

export type EditReceivablePaymentInstallmentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  deletionReason?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  dueDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  penalty?: InputMaybe<Scalars['Float']['input']>;
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type EditRoleInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditSalesAgreementInput = {
  content: Scalars['JSON']['input'];
  id: Scalars['Int']['input'];
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type EditSalesTaxInput = {
  agency?: InputMaybe<Scalars['String']['input']>;
  applyOnProducts: Scalars['Boolean']['input'];
  applyOnServices: Scalars['Boolean']['input'];
  id: Scalars['Int']['input'];
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  rate: Scalars['Float']['input'];
  taxNumber?: InputMaybe<Scalars['String']['input']>;
};

export type EditServiceInput = {
  active: Scalars['Boolean']['input'];
  applyServiceOnServices?: InputMaybe<Scalars['Boolean']['input']>;
  companies: Array<EditServiceProduct_ProductCompanyInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  incomeAccountId: Scalars['Int']['input'];
  itemClassificationId?: InputMaybe<Scalars['Int']['input']>;
  minimumChargeAmount?: InputMaybe<Scalars['String']['input']>;
  minimumPurchasingAmount?: InputMaybe<Scalars['Float']['input']>;
  minimumSellingAmount?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  purchasingPrice?: InputMaybe<Scalars['Float']['input']>;
  sellingUnit: Scalars['String']['input'];
  serviceChargingType: Scalars['String']['input'];
  serviceType: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  specifications?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  taxable: Scalars['Boolean']['input'];
  updateEstimateItems: Scalars['Boolean']['input'];
  vendorCode?: InputMaybe<Scalars['String']['input']>;
  vendorDescription?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
  vendorType: Scalars['String']['input'];
  zeroMarkup: Scalars['Boolean']['input'];
};

export type EditServiceProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
};

export type EditServiceResponse = Product | ProductSkuTaken;

export type EditSettingsCompanyInput = {
  acronym: Scalars['String']['input'];
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  companyId: Scalars['Int']['input'];
  countryId?: InputMaybe<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  document1?: InputMaybe<Scalars['String']['input']>;
  document2?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
  timezone: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type EditStandardProductOpeningInventoryInput = {
  dimension1?: InputMaybe<Scalars['Float']['input']>;
  dimension2?: InputMaybe<Scalars['Float']['input']>;
  dimension3?: InputMaybe<Scalars['Float']['input']>;
  pieces: Scalars['Float']['input'];
  unitPrice: Scalars['Float']['input'];
  warehouseId: Scalars['Int']['input'];
};

export type EditStandardProductResponse = Product | ProductSkuTaken;

export type EditStandardProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
};

export type EditTeamInput = {
  abbreviation: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  members?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
};

export type EditTemplateProductImageInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  url: Scalars['String']['input'];
};

export type EditTemplateProductInput = {
  active: Scalars['Boolean']['input'];
  companies: Array<EditTemplateProduct_ProductCompanyInput>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  images?: InputMaybe<Array<EditTemplateProductImageInput>>;
  incomeAccountId?: InputMaybe<Scalars['Int']['input']>;
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  itemClassificationId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  sellingUnit: Scalars['String']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  specifications?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  taxable: Scalars['Boolean']['input'];
  type: Scalars['String']['input'];
  updateEstimateItems: Scalars['Boolean']['input'];
  valueToEnter: Scalars['String']['input'];
  vendorId?: InputMaybe<Scalars['Int']['input']>;
  vendorType: Scalars['String']['input'];
};

export type EditTemplateProductResponse = Product | ProductSkuTaken;

export type EditTemplateProduct_ProductCompanyInput = {
  companyId: Scalars['Int']['input'];
  markup: Scalars['Float']['input'];
};

export type EditTermInput = {
  companyIds?: Array<Scalars['Int']['input']>;
  defaultEstimateDiscount?: InputMaybe<Scalars['Float']['input']>;
  defaultInstallments: Scalars['Int']['input'];
  defaultRequiresDeposit: Scalars['Boolean']['input'];
  depositPercentage?: InputMaybe<Scalars['Float']['input']>;
  depositType: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  dueIn: Scalars['Int']['input'];
  dueInType: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  interestRates: Array<Scalars['Float']['input']>;
  maxDownPaymentDueIn: Scalars['Int']['input'];
  maximumInstallments: Scalars['Int']['input'];
  minInstallments: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  rate?: InputMaybe<Scalars['Float']['input']>;
  typesOfSales: Array<Scalars['String']['input']>;
};

export type EditTraderInput = {
  displayName: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditTransactionFilesFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditTransactionFilesInput = {
  files?: InputMaybe<Array<EditTransactionFilesFileInput>>;
  id: Scalars['Int']['input'];
};

export type EditTransferFileInput = {
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditTransferInput = {
  amount: Scalars['Float']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<EditTransferFileInput>>;
  fromAccountId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  referenceNo?: InputMaybe<Scalars['String']['input']>;
  toAccountId: Scalars['Int']['input'];
};

export type EditUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  companyIds: Array<Scalars['Int']['input']>;
  defaultCompanyId?: InputMaybe<Scalars['Int']['input']>;
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type EditUserResponse = EmailTaken | User;

export type EditVariationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditVariationOptionInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  vendorPriceGroupId?: InputMaybe<Scalars['Int']['input']>;
};

export type EditVariationOptionResponse = VariationOptionCodeTaken | EditVariationOptionSuccess;

export type EditVariationOptionSuccess = {
  __typename?: 'editVariationOptionSuccess';
  option: VariationOption;
  variation: Variation;
};

export type EditVendorContactInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
};

export type EditVendorInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  businessIdNo?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  contacts?: InputMaybe<Array<EditVendorContactInput>>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  document1?: InputMaybe<Scalars['String']['input']>;
  document2?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expenseAccountId?: InputMaybe<Scalars['Int']['input']>;
  fax?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  inventoryAccountId?: InputMaybe<Scalars['Int']['input']>;
  landedCosts?: InputMaybe<Array<EditVendor_VendorLandedCostInput>>;
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  leadTimeType?: InputMaybe<Scalars['String']['input']>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  paymentTerms?: InputMaybe<Array<EditVendorPaymentTermInput>>;
  phone1?: InputMaybe<Scalars['String']['input']>;
  phone2?: InputMaybe<Scalars['String']['input']>;
  postal?: InputMaybe<Scalars['String']['input']>;
  purchaseOrderEmail?: InputMaybe<Scalars['String']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
  salesOrderEmail?: InputMaybe<Scalars['String']['input']>;
  skuPortion?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  vendorCompanyCode?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type EditVendorLeadTimeInput = {
  id: Scalars['Int']['input'];
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  leadTimeType?: InputMaybe<Scalars['String']['input']>;
};

export type EditVendorPaymentTermInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  installments: Array<EditVendorPaymentTermInstallmentInput>;
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  priceModifier: Scalars['Float']['input'];
};

export type EditVendorPaymentTermInstallmentInput = {
  dueDays: Scalars['Int']['input'];
  share: Scalars['Float']['input'];
  stage: Scalars['String']['input'];
};

export type EditVendorPriceGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditVendorUsesPriceGroupInput = {
  vendorId: Scalars['Int']['input'];
};

export type EditVendor_VendorLandedCostInput = {
  accountId: Scalars['Int']['input'];
  addToProducts: Scalars['Boolean']['input'];
  amount: Scalars['Float']['input'];
  amountType: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type EditWarehouseInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  postal?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  streetNumber?: InputMaybe<Scalars['String']['input']>;
};

export type EditWarehouseLocationInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type EditWorkerFileInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size: Scalars['Int']['input'];
  url: Scalars['String']['input'];
};

export type EditWorkerInput = {
  addComments?: InputMaybe<Array<Scalars['String']['input']>>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['DateTime']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  commissionProfileIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  companies: Array<EditWorkerCompanyInput>;
  companyEmail?: InputMaybe<Scalars['String']['input']>;
  contractorType?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  displayName: Scalars['String']['input'];
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  employeeNumber?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<Array<EditWorkerFileInput>>;
  forceChangePassword?: InputMaybe<Scalars['Boolean']['input']>;
  groupUserId?: InputMaybe<Scalars['Int']['input']>;
  hiredDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Int']['input'];
  installationTeams?: InputMaybe<Array<EditWorkerInstallationTeam>>;
  login?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  positions: Array<EditWorkerPositionInput>;
  postal?: InputMaybe<Scalars['String']['input']>;
  releasedDate?: InputMaybe<Scalars['DateTime']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  stateId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  teamIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  type: Scalars['String']['input'];
  userCompanyIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  usesInstallationTeams?: InputMaybe<Scalars['Boolean']['input']>;
  wageAmount?: InputMaybe<Scalars['Float']['input']>;
  wageFrequency?: InputMaybe<Scalars['String']['input']>;
  wageNextPayday?: InputMaybe<Scalars['String']['input']>;
  wageType?: InputMaybe<Scalars['String']['input']>;
};

export type EditWorkerInstallationTeam = {
  acronym: Scalars['String']['input'];
  capacity?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  numberOfMembers: Scalars['Int']['input'];
};

export type GroupUsersFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ImportBrisaProductInput = {
  sku: Scalars['String']['input'];
  skuSuffix: Scalars['String']['input'];
};

export type InstallationServicesFilters = {
  companyId: Scalars['Int']['input'];
};

export type ItemClassificationsFilters = {
  type?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LossReasonsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type MoneyInTransitFilters = {
  accountId: Scalars['Int']['input'];
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  to?: InputMaybe<Scalars['String']['input']>;
};

export type NewPurchaseOrdersFilters = {
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<Scalars['String']['input']>>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type NotAllocatedEstimateItemsInput = {
  productId: Scalars['Int']['input'];
  purchaseOrderId?: InputMaybe<Scalars['Int']['input']>;
};

export type OpenPurchaseOrdersFilters = {
  search?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentMethodsByAssociatedAccountFilters = {
  accountId: Scalars['Int']['input'];
};

export type PaymentMethodsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type PositionsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type ProductFilters = {
  id: Scalars['Int']['input'];
};

export type ProductsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductsViewFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type ReceivableInstallmentsFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type ReceivableSettlementsFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type ReceiveSalesOrderDepositBankInput = {
  amount: Scalars['Float']['input'];
  bankAccountNo?: InputMaybe<Scalars['String']['input']>;
  bankBranchNo?: InputMaybe<Scalars['String']['input']>;
  bankCode?: InputMaybe<Scalars['String']['input']>;
  checkNumber?: InputMaybe<Scalars['String']['input']>;
  depositDate?: InputMaybe<Scalars['String']['input']>;
  receivementMethodId?: InputMaybe<Scalars['Int']['input']>;
  remarks?: InputMaybe<Scalars['String']['input']>;
};

export type ReceiveSalesOrderDepositInput = {
  banks: Array<ReceiveSalesOrderDepositBankInput>;
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  salesOrderId: Scalars['Int']['input'];
};

export type RequestDiscountAuthorizationInput = {
  estimateId: Scalars['Int']['input'];
};

export type ResetRevisionInput = {
  projectId: Scalars['Int']['input'];
};

export type RolesFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SalesAgreementsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type SalesOrderAllocationsFilters = {
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SalesTaxesFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type SendEstimateInput = {
  cc?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  estimateId: Scalars['Int']['input'];
  expirationDate: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  pdf: Scalars['Upload']['input'];
  recipient?: InputMaybe<Scalars['String']['input']>;
  replyTo?: InputMaybe<Scalars['String']['input']>;
  sendEmail: Scalars['Boolean']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type SendPurchaseOrderInput = {
  cc?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  pdf: Scalars['Upload']['input'];
  purchaseOrderId: Scalars['Int']['input'];
  recipient: Scalars['String']['input'];
  subject: Scalars['String']['input'];
};

export type SendVendorProductRequestInput = {
  productId: Scalars['Int']['input'];
  variations: Array<SendVendorProductRequestVariationInput>;
};

export type SendVendorProductRequestVariationInput = {
  optionId: Scalars['Int']['input'];
  parentVariationId: Scalars['Int']['input'];
};

export type SetAccountStatusInput = {
  id: Scalars['Int']['input'];
  reactivatePaymentMethodsIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  status: Scalars['String']['input'];
};

export type SetAssociateStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetAssociateTypeStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetBuildingStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetCompanyStatusInput = {
  companyId: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetCompetitorStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetCustomerSourceStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetCustomerStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetDefaultTermInput = {
  termId: Scalars['Int']['input'];
};

export type SetDefaultWarehouseInput = {
  id: Scalars['Int']['input'];
};

export type SetEntryReconciliationInput = {
  entryId: Scalars['Int']['input'];
  reconciliation: Scalars['String']['input'];
};

export type SetFavoriteEstimateInput = {
  estimateId: Scalars['Int']['input'];
  projectId: Scalars['Int']['input'];
};

export type SetGroupUserRoleInput = {
  roleId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type SetLossReasonStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetPaymentMethodStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetPositionStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetProductStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetPurchaseOrderStatusInput = {
  purchaseOrderId: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetRolePermissionInput = {
  permission: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SetSalesTaxStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetTeamStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetTermStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetUserStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetVariationOptionStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetVariationStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetVendorPriceGroupStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetVendorStatusInput = {
  id: Scalars['Int']['input'];
  status: Scalars['String']['input'];
};

export type SetWarehouseStatusInput = {
  status: Scalars['String']['input'];
  warehouseId: Scalars['Int']['input'];
};

export type SetWorkerStatusInput = {
  deleteUser?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  lockUser?: InputMaybe<Scalars['Boolean']['input']>;
  returnDate?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  terminationDate?: InputMaybe<Scalars['String']['input']>;
};

export type SignS3Input = {
  filename: Scalars['String']['input'];
  filetype: Scalars['String']['input'];
  kind: Scalars['String']['input'];
};

export type SignUpInput = {
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpResponse = AuthPayload | EmailTaken;

export type StockOpeningFilters = {
  onlyIncludeOpenStock?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  productGroupId?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type SuppliersFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type TeamsFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type TermsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UndeleteEstimateItemInput = {
  estimateId: Scalars['Int']['input'];
  estimateItemId: Scalars['Int']['input'];
};

export type UsersFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type VariationsFilters = {
  status?: InputMaybe<Scalars['String']['input']>;
  vendorId?: InputMaybe<Scalars['Int']['input']>;
};

export type VendorsFilters = {
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type VoidPayablesInput = {
  ids: Array<Scalars['Int']['input']>;
  reason: Scalars['String']['input'];
};

export type VoidReceivablesInput = {
  ids: Array<Scalars['Int']['input']>;
  reason: Scalars['String']['input'];
};

export type WorkerFilters = {
  id: Scalars['Int']['input'];
};

export type WorkersFilters = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  positionType?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type WriteOffPayableInstallmentsInput = {
  date: Scalars['String']['input'];
  installmentIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  payableId: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};

export type WriteOffReceivableInstallmentsInput = {
  date: Scalars['String']['input'];
  installmentIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  reason: Scalars['String']['input'];
  receivableId: Scalars['Int']['input'];
};

export type AuthorizeDiscountMutationVariables = Exact<{
  input: AuthorizeDiscountInput;
}>;


export type AuthorizeDiscountMutation = { __typename?: 'Mutation', authorizeDiscount: { __typename?: 'Estimate', id: number, discountAuthorization: { __typename: 'EstimateDiscountAuthorized' } | { __typename: 'EstimateDiscountNotRequested' } | { __typename: 'EstimateDiscountRequested', requestDate: any } } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename: 'AuthPayload', viewer: { __typename: 'Viewer', id: number, name: string, login: string, avatar: { __typename?: 'Avatar', url?: string | null, initials: string } } } | { __typename: 'CompanySelection' } | { __typename: 'InactiveUser', message: string } | { __typename: 'InvalidLoginInfo', message: string } | { __typename: 'LockedUser', message: string } };

export type AuthPayloadFragmentFragment = { __typename?: 'AuthPayload', viewer: { __typename: 'Viewer', id: number, name: string, group?: { __typename?: 'Group', id: number, locale: string, numberFormat: string, dateFormat: string, currency: string } | null } } & { ' $fragmentName'?: 'AuthPayloadFragmentFragment' };

export type CheckAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckAuthQuery = { __typename?: 'Query', checkAuth?: (
    { __typename: 'AuthPayload' }
    & { ' $fragmentRefs'?: { 'AuthPayloadFragmentFragment': AuthPayloadFragmentFragment } }
  ) | { __typename: 'CompanySelection' } | null };

export type MobileDashboardQueryVariables = Exact<{ [key: string]: never; }>;


export type MobileDashboardQuery = { __typename?: 'Query', mobileDashboard: { __typename?: 'MobileDashboard', lastTwelveMonths: Array<number>, monthsSalesTotal: number, monthsNumberOfSales: number, yearsSalesTotal: number, yearsNumberOfSales: number, activeEstimatesTotal: number, numberOfActiveEstimates: number, approvalThisWeekTotal: number, numberOfApprovalThisWeek: number } };

export type ProjectDetailsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProjectDetailsQuery = { __typename?: 'Query', project: { __typename?: 'Project', id: number, name: string, status: ProjectStatus, favoriteEstimate: { __typename?: 'Estimate', id: number, code: string, discount: number, price: number, markup: number, taxesPrice: number, profitMargin: number, profitMarginPercentage: number, discountAuthorization: { __typename: 'EstimateDiscountAuthorized' } | { __typename: 'EstimateDiscountNotRequested' } | { __typename: 'EstimateDiscountRequested', requestDate: any }, installationService?: { __typename?: 'EstimateItem', id: number, price: number } | null, deliveryService?: { __typename?: 'EstimateItem', id: number, price: number } | null, allItems: Array<{ __typename?: 'EstimateItem', id: number, name: string, price: number, discount: number }> }, customer: { __typename?: 'Customer', id: number, name: string }, projectOwner: { __typename?: 'Worker', id: number, name: string } } };

export type ProjectsQueryVariables = Exact<{
  filters: ProjectsFilters;
}>;


export type ProjectsQuery = { __typename?: 'Query', projects: { __typename?: 'ProjectsResponse', hasMore: boolean, projects: Array<{ __typename?: 'Project', id: number, name: string, favoriteEstimate: { __typename?: 'Estimate', id: number, price: number, markup: number, discount: number, profitMarginPercentage: number }, customer: { __typename?: 'Customer', id: number, name: string } }> } };

export type SalesOrderDetailsQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SalesOrderDetailsQuery = { __typename?: 'Query', project: { __typename?: 'Project', id: number, name: string, status: ProjectStatus, saleOrder?: { __typename?: 'SaleOrder', id: number, code: string, estimate: { __typename?: 'Estimate', id: number, discount: number, price: number, markup: number, taxesPrice: number, profitMargin: number, profitMarginPercentage: number, installationService?: { __typename?: 'EstimateItem', id: number, price: number } | null, deliveryService?: { __typename?: 'EstimateItem', id: number, price: number } | null, allItems: Array<{ __typename?: 'EstimateItem', id: number, name: string, price: number, discount: number }> } } | null, customer: { __typename?: 'Customer', id: number, name: string }, projectOwner: { __typename?: 'Worker', id: number, name: string } } };

export type SalesOrdersQueryVariables = Exact<{
  filters: ProjectsFilters;
}>;


export type SalesOrdersQuery = { __typename?: 'Query', projects: { __typename?: 'ProjectsResponse', hasMore: boolean, projects: Array<{ __typename?: 'Project', id: number, name: string, saleOrder?: { __typename?: 'SaleOrder', id: number, estimate: { __typename?: 'Estimate', id: number, price: number, markup: number, discount: number, profitMarginPercentage: number } } | null, customer: { __typename?: 'Customer', id: number, name: string } }> } };

export const AuthPayloadFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthPayloadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"numberFormat"}},{"kind":"Field","name":{"kind":"Name","value":"dateFormat"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<AuthPayloadFragmentFragment, unknown>;
export const AuthorizeDiscountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AuthorizeDiscount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorizeDiscountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorizeDiscount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"discountAuthorization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EstimateDiscountRequested"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestDate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AuthorizeDiscountMutation, AuthorizeDiscountMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"loginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"initials"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InvalidLoginInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LockedUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InactiveUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CheckAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckAuth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkAuth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthPayloadFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthPayloadFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"numberFormat"}},{"kind":"Field","name":{"kind":"Name","value":"dateFormat"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<CheckAuthQuery, CheckAuthQueryVariables>;
export const MobileDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MobileDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mobileDashboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lastTwelveMonths"}},{"kind":"Field","name":{"kind":"Name","value":"monthsSalesTotal"}},{"kind":"Field","name":{"kind":"Name","value":"monthsNumberOfSales"}},{"kind":"Field","name":{"kind":"Name","value":"yearsSalesTotal"}},{"kind":"Field","name":{"kind":"Name","value":"yearsNumberOfSales"}},{"kind":"Field","name":{"kind":"Name","value":"activeEstimatesTotal"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfActiveEstimates"}},{"kind":"Field","name":{"kind":"Name","value":"approvalThisWeekTotal"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfApprovalThisWeek"}}]}}]}}]} as unknown as DocumentNode<MobileDashboardQuery, MobileDashboardQueryVariables>;
export const ProjectDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"favoriteEstimate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"markup"}},{"kind":"Field","name":{"kind":"Name","value":"taxesPrice"}},{"kind":"Field","name":{"kind":"Name","value":"discountAuthorization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EstimateDiscountRequested"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestDate"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"installationService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deliveryService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"profitMarginPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"allItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectDetailsQuery, ProjectDetailsQueryVariables>;
export const ProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Projects"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectsFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"favoriteEstimate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"markup"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"profitMarginPercentage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasMore"}}]}}]}}]} as unknown as DocumentNode<ProjectsQuery, ProjectsQueryVariables>;
export const SalesOrderDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SalesOrderDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"saleOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"estimate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"markup"}},{"kind":"Field","name":{"kind":"Name","value":"taxesPrice"}},{"kind":"Field","name":{"kind":"Name","value":"installationService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deliveryService"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"profitMargin"}},{"kind":"Field","name":{"kind":"Name","value":"profitMarginPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"allItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SalesOrderDetailsQuery, SalesOrderDetailsQueryVariables>;
export const SalesOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SalesOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectsFilters"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasMore"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"saleOrder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"estimate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"markup"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"profitMarginPercentage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SalesOrdersQuery, SalesOrdersQueryVariables>;