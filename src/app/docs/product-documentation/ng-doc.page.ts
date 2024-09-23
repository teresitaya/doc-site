import {NgDocPage} from '@ng-doc/core';
import ProductDocumentationCategory from './ng-doc.category';

const ProductDocumentationPage: NgDocPage = {
	title: `Product Documentation`,
	mdFile: './index.md',
	category: ProductDocumentationCategory,
	order: 1
};

export default ProductDocumentationPage;
