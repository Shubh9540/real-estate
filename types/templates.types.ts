export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  contactButton: { text: string; url: string };
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface TopBarData {
  tagline: string;
  taglineIcon: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  socialLinks?: { id: string; icon: string; url: string }[];
}

export interface TopBarProps {
  data?: TopBarData;
  logoData?: HeaderData;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage: string;
  paths: BreadcrumbPath[];
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
}

export interface GalleryItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  openImageLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  images: GalleryItem[];
}

export interface GallerySectionProps {
  data?: GalleryData;
}

export interface HeroButtonData {
  text: string;
  url: string;
  icon: string;
}

export interface HeroData {
  eyebrow: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: HeroButtonData;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutFeatureItem {
  id: string;
  icon: string;
  label: string;
}

export interface AboutUsData {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  highlightedTitle: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  imageSecondaryLeft: string;
  imageSecondaryLeftAlt: string;
  imageSecondaryRight: string;
  imageSecondaryRightAlt: string;
  features: AboutFeatureItem[];
  button: { text: string; url: string };
}

export interface AboutUsSectionProps {
  data?: AboutUsData;
  hideButton?: boolean;
}

export interface AgentStat {
  id: string;
  label: string;
  value: string;
  icon: string;
}

export interface AgentDetailInfo {
  about: string;
  address: string;
  phone: string;
  practiceArea: string;
  experience: string;
  closingText: string;
}

export interface AgentDetailService {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  url: string;
}

export interface AgentSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface AgentItem {
  id: string;
  category: string;
  name: string;
  role: string;
  location: string;
  locationIcon: string;
  image: string;
  imageAlt: string;
  stats: AgentStat[];
  profileUrl: string;
  contactUrl: string;
  detail: AgentDetailInfo;
}

export interface AgentDetailUI {
  title1: string;
  highlightedTitle: string;
  locationLabel: string;
  phoneLabel: string;
  practiceAreaLabel: string;
  socialLinks: AgentSocialLink[];
  services: AgentDetailService[];
}

export interface PaginationItem {
  id: string;
  label: string;
  page: number;
}

export interface AgentsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  viewAllText: string;
  viewAllUrl: string;
  profileText: string;
  contactText: string;
  agents: AgentItem[];
  additionalAgents: AgentItem[];
  itemsPerPage: number;
  paginationLabel: string;
  pagination: PaginationItem[];
  detailUI: AgentDetailUI;
}

export interface AgentsSectionProps {
  data?: AgentsData;
}

export interface AgentGridProps {
  data?: AgentsData;
}

export interface AgentDetailPageData {
  agent: AgentItem;
  ui: AgentDetailUI;
}

export interface AgentDetailContentProps {
  data?: AgentDetailPageData;
}

export interface AgentDetailRouteProps {
  params: Promise<{ id: string }>;
}

export interface ServiceItem {
  id: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  url: string;
}

export interface ServicesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  linkText: string;
  services: ServiceItem[];
}

export interface ServicesSectionProps {
  data?: ServicesData;
  hideButton?: boolean;
  isSlider?: boolean;
}

export interface PropertyServiceDetailText {
  id: string;
  text: string;
}

export interface PropertyServiceDetail {
  title1: string;
  highlightedTitle: string;
  introduction: string;
  overviewTitle: string;
  overviewText: string;
  closingText: PropertyServiceDetailText[];
}

export interface PropertyServiceItem {
  id: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  url: string;
  detail: PropertyServiceDetail;
}

export interface PropertyServicesData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  linkText: string;
  detailSubtitle: string;
  services: PropertyServiceItem[];
}

export interface PropertyServicesGridProps {
  data?: PropertyServicesData;
}

export interface PropertyServiceDetailPageData {
  service: PropertyServiceItem;
  services: PropertyServiceItem[];
  detailSubtitle: string;
  mainImage: PropertyServiceItem;
  secondaryImages: PropertyServiceItem[];
  sidebarImage: PropertyServiceItem;
}

export interface PropertyServiceDetailContentProps {
  data?: PropertyServiceDetailPageData;
}

export interface PropertyServiceDetailRouteProps {
  params: Promise<{ id: string }>;
}

export interface ServiceCardProps {
  service: ServiceItem;
  linkText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialsSectionProps {
  data?: TestimonialsData;
}

export interface TestimonialGridData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialGridProps {
  data?: TestimonialGridData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  copyrightText: string;
  description: string;
  quickLinksTitle: string;
  contactTitle: string;
  companyTitle: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  companyLinks: { id: string; label: string; url: string }[];
  contactItems: { id: string; icon: string; title: string; value: string; url?: string }[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Topbar: string;
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface PageComponentRegistry {
  components: string[];
}

export interface WhyChooseUsFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  features: WhyChooseUsFeature[];
  imageMain: string;
  imageAlt: string;
}

export interface WhyChooseUsSectionProps {
  data?: WhyChooseUsData;
}

export interface PropertyFeature {
  id: string;
  icon: string;
  label: string;
}

export interface PropertyDetailInfo {
  status: string;
  category: string;
  publishedDate: string;
  comments: string;
  price: string;
  description: string;
  propertyType: string;
  totalArea: string;
  bedrooms: string;
  bathrooms: string;
  yearBuilt: string;
  floor: string;
  balcony: string;
  parking: string;
  livingRoom: string;
  kitchen: string;
  diningArea: string;
  security: string;
}

export interface PropertyItem {
  id: string;
  image: string;
  imageAlt: string;
  propertyCount: string;
  propertyCountIcon: string;
  location: string;
  locationIcon: string;
  title: string;
  features: PropertyFeature[];
  url: string;
  detail: PropertyDetailInfo;
}

export interface PropertyFactLabel {
  title: string;
  icon: string;
}

export interface PropertyDetailUI {
  featuredLabel: string;
  viewAllPhotosText: string;
  previousPhotoLabel: string;
  nextPhotoLabel: string;
  closeGalleryLabel: string;
  scheduleButtonText: string;
  scheduleButtonUrl: string;
  descriptionTitle: string;
  detailsTitle: string;
  factsTitle: string;
  detailLabels: {
    propertyId: string;
    location: string;
    propertyType: string;
    totalArea: string;
    floor: string;
    bedrooms: string;
    bathrooms: string;
    balcony: string;
    parking: string;
    yearBuilt: string;
    status: string;
  };
  factLabels: {
    livingRoom: PropertyFactLabel;
    bedrooms: PropertyFactLabel;
    bathrooms: PropertyFactLabel;
    kitchen: PropertyFactLabel;
    diningArea: PropertyFactLabel;
    balcony: PropertyFactLabel;
    parking: PropertyFactLabel;
    security: PropertyFactLabel;
  };
  form: {
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
}

export interface PropertyGalleryImage {
  id: string;
  image: string;
  imageAlt: string;
}

export interface PropertyDetailPageData {
  property: PropertyItem;
  ui: PropertyDetailUI;
  galleryImages: PropertyGalleryImage[];
}

export interface OurPropertiesData {
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  viewText: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  itemsPerPage: number;
  paginationLabel: string;
  pagination: {
    id: string;
    label: string;
    page: number;
  }[];
  detailUI: PropertyDetailUI;
  properties: PropertyItem[];
}

export interface OurPropertiesSectionProps {
  data?: OurPropertiesData;
}

export interface PropertyGridProps {
  data?: OurPropertiesData;
}

export interface PropertyDetailContentProps {
  data?: PropertyDetailPageData;
}

export interface PropertyDetailRouteProps {
  params: Promise<{ id: string }>;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  url?: string;
}

export interface ContactSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface ContactData {
  backgroundImage: string;
  backgroundImageAlt: string;
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  form: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    fullNamePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
  contactPanel: {
    eyebrow: string;
    title1: string;
    titleHighlight: string;
    description: string;
    items: ContactInfoItem[];
    socialTitle: string;
    socialLinks: ContactSocialLink[];
  };
  location: {
    eyebrow: string;
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactSectionProps {
  data?: ContactData;
}

export interface BookVisitPropertyOption {
  id: string;
  label: string;
  value: string;
}

export interface BookVisitData {
  eyebrow: string;
  title1: string;
  highlightedTitle: string;
  title2: string;
  description: string;
  image: string;
  imageAlt: string;
  form: {
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    datePlaceholder: string;
    propertyPlaceholder: string;
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
    properties: BookVisitPropertyOption[];
  };
}

export interface BookVisitSectionProps {
  data?: BookVisitData;
}

export interface PropertyBlogAuthor {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface PropertyBlogSection {
  id: string;
  title: string;
  text: string;
}

export interface PropertyBlogDetail {
  readTime: string;
  introText: string;
  sections: PropertyBlogSection[];
  quote: string;
  closingText: string;
}

export interface PropertyBlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
  imageAlt: string;
  url: string;
  author: PropertyBlogAuthor;
  detail: PropertyBlogDetail;
}

export interface PropertyBlogCategory {
  id: string;
  label: string;
  count: string;
  url: string;
}

export interface PropertyBlogFeaturedListing {
  id: string;
  title: string;
  price: string;
  details: string;
  image: string;
  imageAlt: string;
  url: string;
}

export interface PropertyBlogsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  authorPrefix: string;
  readMoreText: string;
  viewAllText: string;
  viewAllUrl: string;
  itemsPerPage: number;
  paginationLabel: string;
  pagination: PaginationItem[];
  categoriesTitle: string;
  categories: PropertyBlogCategory[];
  featuredListingsTitle: string;
  featuredListings: PropertyBlogFeaturedListing[];
  posts: PropertyBlogPost[];
}

export interface PropertyBlogsSectionProps {
  data?: PropertyBlogsData;
}

export interface BlogGridProps {
  data?: PropertyBlogsData;
}

export interface PropertyBlogDetailPageData {
  post: PropertyBlogPost;
  data: PropertyBlogsData;
}

export interface PropertyBlogDetailContentProps {
  data?: PropertyBlogDetailPageData;
}

export interface PropertyBlogDetailRouteProps {
  params: Promise<{ id: string }>;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface FourHomelessTemplateData {
  common: {
    metadata: SiteMetadataData;
    aboutBreadcrumb?: BreadcrumbData;
    propertiesBreadcrumb?: BreadcrumbData;
    propertyDetailBreadcrumb?: BreadcrumbData;
    servicesBreadcrumb?: BreadcrumbData;
    serviceDetailBreadcrumbs?: Record<string, BreadcrumbData>;
    contactBreadcrumb?: BreadcrumbData;
    bookVisitBreadcrumb?: BreadcrumbData;
    agentsBreadcrumb?: BreadcrumbData;
    agentDetailBreadcrumb?: BreadcrumbData;
    galleryBreadcrumb?: BreadcrumbData;
    testimonialsBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    blogDetailBreadcrumbs?: Record<string, BreadcrumbData>;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    RealEstate: {
      templateComponents?: TemplateComponentsData;
      sections: {
        TopBar?: { variants?: { FourHomelessTopBar1?: TopBarData } };
        Header?: { variants?: { FourHomelessHeader1?: HeaderData } };
        Hero?: { variants?: { FourHomelessHero1?: HeroData } };
        AboutUs?: { variants?: { FourHomelessAboutUs1?: AboutUsData } };
        Agents?: { variants?: { FourHomelessAgents1?: AgentsData } };
        Gallery?: { variants?: { FourHomelessGallery1?: GalleryData } };
        Services?: { variants?: { FourHomelessServices1?: ServicesData } };
        PropertyServices?: { variants?: { FourHomelessPropertyServices1?: PropertyServicesData } };
        Testimonials?: { variants?: { FourHomelessTestimonials1?: TestimonialsData } };
        TestimonialGrid?: { variants?: { FourHomelessTestimonialGrid1?: TestimonialGridData } };
        PropertyBlogs?: { variants?: { FourHomelessPropertyBlogs1?: PropertyBlogsData } };
        whyChooseUs?: { variants?: { FourHomelessWhyChooseUs1?: WhyChooseUsData; FourHomelessAboutWhyChooseUs1?: WhyChooseUsData } };
        OurProperties?: { variants?: { FourHomelessOurProperties1?: OurPropertiesData } };
        contact?: { variants?: { FourHomelessContact1?: ContactData } };
        BookVisit?: { variants?: { FourHomelessBookVisit1?: BookVisitData } };
      };
    };
  };
  pages: Record<string, PageComponentRegistry>;
}
