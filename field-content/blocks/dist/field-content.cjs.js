'use strict';

var _join = require("path").join;

Object.defineProperty(exports, '__esModule', {
  value: true
});

var fieldContent = require('../../Block/dist/field-content.cjs.js');

class BlockquoteBlock extends fieldContent.Block {
  get type() {
    return 'blockquote';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/rnaez6")];
  }

}

class CaptionBlock extends fieldContent.Block {
  get type() {
    return 'caption';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/151k2vo")];
  }

}

class HeadingBlock extends fieldContent.Block {
  get type() {
    return 'heading';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/dqkl46"), ...new ParagraphBlock().getAdminViews()];
  }

}

class ImageBlock extends fieldContent.Block {
  get type() {
    return 'image';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/df1g4a")];
  }

}

class ImageContainerBlock extends fieldContent.Block {
  get type() {
    return 'image-container';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/1q5y37e"), ...new ImageBlock().getAdminViews(), ...new CaptionBlock().getAdminViews()];
  }

}

class LinkBlock extends fieldContent.Block {
  get type() {
    return 'link';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/rsvl23")];
  }

}

class ListItemBlock extends fieldContent.Block {
  get type() {
    return 'list-item';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/a1zv6k")];
  }

}

class OrderedListBlock extends fieldContent.Block {
  get type() {
    return 'ordered-list';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/1huteyt"), ...new ListItemBlock().getAdminViews()];
  }

}

class ParagraphBlock extends fieldContent.Block {
  get type() {
    return 'paragraph';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/hpbhcq")];
  }

}

class UnorderedListBlock extends fieldContent.Block {
  get type() {
    return 'unordered-list';
  }

  getAdminViews() {
    return [_join(__dirname, "../../dist/1uzypgz"), ...new ListItemBlock().getAdminViews()];
  }

}

exports.blockquote = BlockquoteBlock;
exports.caption = CaptionBlock;
exports.heading = HeadingBlock;
exports.image = ImageBlock;
exports.imageContainer = ImageContainerBlock;
exports.link = LinkBlock;
exports.listItem = ListItemBlock;
exports.orderedList = OrderedListBlock;
exports.paragraph = ParagraphBlock;
exports.unorderedList = UnorderedListBlock;
