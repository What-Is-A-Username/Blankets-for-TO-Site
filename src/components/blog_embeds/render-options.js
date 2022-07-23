export default options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            const data = assets.get(node.data.target.sys.id)
            if (data.file.contentType.startsWith('image/')) {
                return(<CaptionedFigure gatsbyImageData={data.gatsbyImageData} title={data.title} description={data.description}/>)
            }
        },
        [BLOCKS.EMBEDDED_ENTRY]: node => {
            const data = assets.get(node.data.target.sys.id)
            if (data.internal.type === 'ContentfulEmbeddedQuestion') {
                return(<QuestionEmbed data={data}/>)
            } else if (data.internal.type === 'ContentfulGalleryEmbed') {
                return(<GalleryEmbed data={data}/>)
            }
        }
    },
};