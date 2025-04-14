import { createDirectus, rest, } from '@directus/sdk';


// Base interfaces
interface BaseModel {
    id: string;
    sort?: number;
}

interface TimestampModel {
    date_created?: string;
    date_updated?: string;
    user_created?: string;
    user_updated?: string;
}

// SEO interface
interface SEO {
    title?: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
    noFollow?: boolean;
}

// Button interfaces
interface Button extends BaseModel {
    type: 'page' | 'post' | 'url';
    label: string;
    variant: 'default' | 'outline' | 'soft' | 'ghost' | 'link';
    url?: string;
    page?: string;
    post?: string;
}

interface ButtonGroup extends BaseModel {
    buttons: Button[];
}

// Block interfaces
interface BlockHero extends BaseModel {
    tagline?: string;
    headline: string;
    description?: string;
    image?: string;
    buttonGroup?: ButtonGroup;
    layout: 'image_left' | 'image_center' | 'image_right';
}

interface BlockRichText extends BaseModel {
    tagline?: string;
    headline?: string;
    content: string;
    alignment: 'left' | 'center';
}

interface BlockForm extends BaseModel {
    tagline?: string;
    headline?: string;
    form: string; // Reference to Form
}

interface BlockGallery extends BaseModel {
    tagline?: string;
    headline?: string;
    items: {
        file: string;
        sort?: number;
    }[];
}

interface BlockPricing extends BaseModel {
    tagline?: string;
    headline?: string;
    pricingCards: PricingCard[];
}

interface PricingCard extends BaseModel {
    title: string;
    description?: string;
    price: string;
    badge?: string;
    features: string[];
    isHighlighted?: boolean;
    button?: Button;
}

// Page & Post interfaces
interface Page extends BaseModel, TimestampModel {
    title: string;
    permalink: string;
    status: 'draft' | 'in_review' | 'published';
    publishedAt?: string;
    seo?: SEO;
    blocks: (BlockHero | BlockRichText | BlockForm | BlockGallery | BlockPricing)[];
}

interface Post extends BaseModel, TimestampModel {
    title: string;
    slug: string;
    status: 'draft' | 'in_review' | 'published';
    publishedAt?: string;
    description?: string;
    image?: string;
    content: string;
    author?: string;
    seo?: SEO;
}

// Navigation interfaces
interface NavigationItem extends BaseModel {
    title: string;
    type: 'page' | 'post' | 'url' | 'group';
    url?: string;
    page?: string;
    post?: string;
    parent?: string;
    children?: NavigationItem[];
}

interface Navigation extends BaseModel {
    title: string;
    isActive: boolean;
    items: NavigationItem[];
}

// Form interfaces
interface FormField extends BaseModel {
    name: string;
    type: 'text' | 'textarea' | 'checkbox' | 'checkbox_group' | 'radio' | 'file' | 'select' | 'hidden';
    label: string;
    placeholder?: string;
    help?: string;
    required?: boolean;
    validation?: string;
    width: '100' | '67' | '50' | '33';
    choices?: { text: string; value: string }[];
}

interface Form extends BaseModel {
    title: string;
    isActive: boolean;
    submitLabel?: string;
    onSuccess: 'redirect' | 'message';
    successMessage?: string;
    successRedirectUrl?: string;
    fields: FormField[];
    emails?: {
        to: string[];
        subject: string;
        message: string;
    }[];
}

// Global Settings interface
interface Globals {
    title: string;
    tagline?: string;
    description?: string;
    url: string;
    logo?: string;
    logoDarkMode?: string;
    favicon?: string;
    accentColor?: string;
    socialLinks?: {
        service: 'facebook' | 'instagram' | 'linkedin' | 'x' | 'vimeo' | 'youtube' | 'github' | 'discord' | 'docker';
        url: string;
    }[];
}

export type {
    Button,
    ButtonGroup,
    BlockHero,
    BlockRichText,
    BlockForm,
    BlockGallery,
    BlockPricing,
    PricingCard,
    Page,
    Post,
    NavigationItem,
    Navigation,
    FormField,
    Form,
    Globals,
    SEO
};


export interface Schema {
    posts: Post[];
    globals: Globals;
    pages: Page[];
    pricing_cards: PricingCard[];
    navigation_items: NavigationItem[];
    navigations: Navigation[];
    forms: Form[];
}

const directus = createDirectus<Schema>(import.meta.env.PUBLIC_URL).with(rest());

export default directus;
