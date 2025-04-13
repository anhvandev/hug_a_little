import { createDirectus, rest, } from '@directus/sdk';
// types/schema.ts

export interface BlockButton  {
    id: string;
    button_group?: string;
    sort?: number;
    type?: 'page' | 'post' | 'url';
    page?: string;
    post?: string;
    url?: string;
    label?: string;
    variant?: 'default' | 'outline' | 'soft' | 'ghost' | 'link';
}

export interface BlockGalleryItem  {
    id: string;
    block_gallery?: string;
    directus_file?: string;
    sort?: number;
}

export interface BlockHero  {
    id: string;
    tagline?: string;
    headline?: string;
    description?: string;
    button_group?: string;
    image?: string;
    layout?: 'image_left' | 'image_center' | 'image_right';
    alignment?: 'left' | 'center' | 'right';
}

export interface BlockPricingCard  {
    id: string;
    title?: string;
    badge?: string;
    price?: string;
    is_highlighted?: boolean;
    description?: string;
    features?: string[];
    button?: string;
    pricing?: string;
    sort?: number;
}

export interface Category  {
    id: string;
    sort?: number;
    title?: string;
    is_active: boolean;
    parent_category?: string;
    sub_categories?: Category[];
}

export interface CustomerAddress  {
    id: string;
    sort?: number;
    customer?: string;
    is_active: boolean;
    is_shipping: boolean;
    is_billing: boolean;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country_code?: string;
}

export interface FormField  {
    id: string;
    sort?: number;
    form?: string;
    name?: string;
    type?: 'text' | 'textarea' | 'checkbox' | 'checkbox_group' | 'radio' | 'file' | 'select' | 'hidden';
    label?: string;
    placeholder?: string;
    help?: string;
    validation?: string;
    required?: boolean;
    width?: '100' | '67' | '50' | '33';
    choices?: Array<{
        text: string;
        value: string;
    }>;
}

export interface FormSubmissionValue  {
    id: string;
    form_submission?: string;
    value?: string;
    field?: string;
    sort?: number;
    file?: string;
}

export interface NavigationItem  {
    id: string;
    sort?: number;
    navigation?: string;
    title?: string;
    type?: 'page' | 'post' | 'url' | 'group';
    page?: string;
    post?: string;
    url?: string;
    children?: NavigationItem[];
    parent?: string;
}

export interface OrderItem  {
    id: string;
    order?: string;
    sort?: number;
    product?: string;
    product_variant?: string;
    quantity?: number;
    price?: number;
    subtotal?: number;
    total?: number;
}

export interface Order  {
    id: string;
    user_created?: string;
    date_created?: string;
    user_updated?: string;
    date_updated?: string;
    canceled_at?: string;
    completed_at?: string;
    order_number?: string;
    status: 'pending' | 'completed' | 'archived' | 'canceled';
    fulfillment_status?: 'open' | 'in_progress' | 'fulfilled' | 'on_hold';
    payment_status?: 'not_paid' | 'awaiting' | 'paid' | 'refunded';
    customer?: string;
    billing_address?: string;
    shipping_address?: string;
    line_items?: OrderItem[];
    subtotal?: number;
    tax_total?: number;
    shipping_total?: number;
    total?: number;
}

export interface PageBlock  {
    id: string;
    sort?: number;
    page?: string;
    item?: string;
    collection?: string;
    hide_block?: boolean;
    background?: 'light' | 'dark';
}

export interface Page  {
    id: string;
    sort?: number;
    title: string;
    permalink: string;
    status: 'draft' | 'in_review' | 'published';
    published_at?: string;
    description?: string;
    blocks?: PageBlock[];
}

export interface BlockRichText  {
    id: string;
    tagline?: string;
    headline?: string;
    content?: string;
    alignment?: 'left' | 'center';
}

export interface Customer  {
    id: string;
    user_created?: string;
    is_subscribed?: boolean;
    orders?: Order[];
    password?: string;
    date_created?: string;
    user_updated?: string;
    date_updated?: string;
    first_name?: string;
    last_name?: string;
    email: string;
    phone?: string;
}

export interface Post  {
    id: string;
    sort?: number;
    title: string;
    slug: string;
    status: 'draft' | 'in_review' | 'published';
    published_at?: string;
    description?: string;
    author?: string;
    image?: string;
    content?: string;
}

export interface ProductVariant  {
    id: string;
    product?: string;
    sku?: string;
    price?: number;
    color?: string;
    size?: string;
    weight?: number;
    weight_unit?: 'g' | 'kg' | 'lb' | 'oz';
    image?: string;
}

export interface TaxRate  {
    id: string;
    title?: string;
    code?: string;
    rate?: number;
}

export interface BlockForm  {
    id: string;
    tagline?: string;
    headline?: string;
    form?: string;
}

export interface Form  {
    id: string;
    sort?: number;
    emails?: Array<{
        to: string[];
        subject: string;
        message: string;
    }>;
    fields?: FormField[];
    submissions?: FormSubmissionValue[];
    submit_label?: string;
    title?: string;
    on_success?: 'redirect' | 'message';
    is_active: boolean;
    success_message?: string;
    success_redirect_url?: string;
}

export interface Navigation  {
    is_active: boolean;
    title?: string;
    id: string;
    items?: NavigationItem[];
}

export interface Global  {
    id: string;
    openai_api_key?: string;
    title?: string;
    directus_url?: string;
    url?: string;
    logo?: string;
    logo_dark_mode?: string;
    favicon?: string;
    accent_color?: string;
    tagline?: string;
    description?: string;
    social_links?: Array<{
        service: string;
        url: string;
    }>;
}

export interface BlockPost  {
    id: string;
    tagline?: string;
    headline?: string;
    collection: string;
    limit?: number;
}

export interface BlockPricing  {
    id: string;
    tagline?: string;
    headline?: string;
    pricing_cards?: BlockPricingCard[];
}

export interface BlockButtonGroup  {
    id: string;
    sort?: number;
    buttons?: BlockButton[];
}

export interface Schema {
    posts: Post[];
    globals: Global;
    pages: Page[];
}

const directus = createDirectus<Schema>(import.meta.env.PUBLIC_URL).with(rest());

export default directus;
