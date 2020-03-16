import { join as _join } from "path";
import { Block } from '../../Block/dist/field-content.esm.js';

class BlockquoteBlock extends Block {
  get type() {
    return 'blockquote';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/rnaez6")];
  }

}

class CaptionBlock extends Block {
  get type() {
    return 'caption';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/151k2vo")];
  }

}

class HeadingBlock extends Block {
  get type() {
    return 'heading';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/dqkl46"), ...new ParagraphBlock().getAdminViews()];
  }

}

class ImageBlock extends Block {
  get type() {
    return 'image';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/df1g4a")];
  }

}

class ImageContainerBlock extends Block {
  get type() {
    return 'image-container';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/1q5y37e"), ...new ImageBlock().getAdminViews(), ...new CaptionBlock().getAdminViews()];
  }

}

class LinkBlock extends Block {
  get type() {
    return 'link';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/rsvl23")];
  }

}

class ListItemBlock extends Block {
  get type() {
    return 'list-item';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/a1zv6k")];
  }

}

class OrderedListBlock extends Block {
  get type() {
    return 'ordered-list';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/1huteyt"), ...new ListItemBlock().getAdminViews()];
  }

}

class ParagraphBlock extends Block {
  get type() {
    return 'paragraph';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/hpbhcq")];
  }

}

class UnorderedListBlock extends Block {
  get type() {
    return 'unordered-list';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/1uzypgz"), ...new ListItemBlock().getAdminViews()];
  }

}

export { BlockquoteBlock as blockquote, CaptionBlock as caption, HeadingBlock as heading, ImageBlock as image, ImageContainerBlock as imageContainer, LinkBlock as link, ListItemBlock as listItem, OrderedListBlock as orderedList, ParagraphBlock as paragraph, UnorderedListBlock as unorderedList };
