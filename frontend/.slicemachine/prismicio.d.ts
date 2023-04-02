// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for accueil documents */
interface HomeDocumentData {
    /**
     * Image de fond field in *accueil*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.backgroundImage
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    backgroundImage: prismicT.ImageField<never>;
    /**
     * Introduction field in *accueil*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.introduction
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    introduction: prismicT.RichTextField;
    /**
     * Prénom field in *accueil*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.surname
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    surname: prismicT.KeyTextField;
    /**
     * Nom field in *accueil*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Job part 1 field in *accueil*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.job_part_1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    job_part_1: prismicT.KeyTextField;
    /**
     * Job part 2 field in *accueil*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.job_part_2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    job_part_2: prismicT.KeyTextField;
    /**
     * Slice Zone field in *accueil*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *accueil → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = SkillsSlice | ProjectsListSlice | ToolsSlice;
/**
 * accueil document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for projet documents */
interface ProjectDocumentData {
    /**
     * Vignette field in *projet*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.thumbnail
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    thumbnail: prismicT.ImageField<never>;
    /**
     * Titre field in *projet*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * projet document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
export type AllDocumentTypes = HomeDocument | ProjectDocument;
/**
 * Primary content in ProjectsList → Primary
 *
 */
interface ProjectsListSliceDefaultPrimary {
    /**
     * Introduction field in *ProjectsList → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: projects_list.primary.introduction
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    introduction: prismicT.RichTextField;
}
/**
 * Item in ProjectsList → Items
 *
 */
export interface ProjectsListSliceDefaultItem {
    /**
     * Titre field in *ProjectsList → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: projects_list.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Image principale field in *ProjectsList → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: projects_list.items[].main_image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    main_image: prismicT.ImageField<never>;
}
/**
 * Default variation for ProjectsList Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ProjectsList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProjectsListSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ProjectsListSliceDefaultPrimary>, Simplify<ProjectsListSliceDefaultItem>>;
/**
 * Slice variation for *ProjectsList*
 *
 */
type ProjectsListSliceVariation = ProjectsListSliceDefault;
/**
 * ProjectsList Shared Slice
 *
 * - **API ID**: `projects_list`
 * - **Description**: `ProjectsList`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ProjectsListSlice = prismicT.SharedSlice<"projects_list", ProjectsListSliceVariation>;
/**
 * Primary content in Skills → Primary
 *
 */
interface SkillsSliceDefaultPrimary {
    /**
     * Introduction field in *Skills → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: skills.primary.introduction
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    introduction: prismicT.RichTextField;
}
/**
 * Item in Skills → Items
 *
 */
export interface SkillsSliceDefaultItem {
    /**
     * Titre field in *Skills → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Skills → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: skills.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Skills Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Skills`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SkillsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SkillsSliceDefaultPrimary>, Simplify<SkillsSliceDefaultItem>>;
/**
 * Slice variation for *Skills*
 *
 */
type SkillsSliceVariation = SkillsSliceDefault;
/**
 * Skills Shared Slice
 *
 * - **API ID**: `skills`
 * - **Description**: `Skills`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SkillsSlice = prismicT.SharedSlice<"skills", SkillsSliceVariation>;
/**
 * Primary content in Tools → Primary
 *
 */
interface ToolsSliceDefaultPrimary {
    /**
     * Introduction field in *Tools → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: tools.primary.introduction
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    introduction: prismicT.RichTextField;
}
/**
 * Item in Tools → Items
 *
 */
export interface ToolsSliceDefaultItem {
    /**
     * Icone field in *Tools → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: tools.items[].icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon: prismicT.ImageField<never>;
    /**
     * Nom de l'outil field in *Tools → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: tools.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
}
/**
 * Default variation for Tools Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Tools`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ToolsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ToolsSliceDefaultPrimary>, Simplify<ToolsSliceDefaultItem>>;
/**
 * Slice variation for *Tools*
 *
 */
type ToolsSliceVariation = ToolsSliceDefault;
/**
 * Tools Shared Slice
 *
 * - **API ID**: `tools`
 * - **Description**: `Tools`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ToolsSlice = prismicT.SharedSlice<"tools", ToolsSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, ProjectDocumentData, ProjectDocument, AllDocumentTypes, ProjectsListSliceDefaultPrimary, ProjectsListSliceDefaultItem, ProjectsListSliceDefault, ProjectsListSliceVariation, ProjectsListSlice, SkillsSliceDefaultPrimary, SkillsSliceDefaultItem, SkillsSliceDefault, SkillsSliceVariation, SkillsSlice, ToolsSliceDefaultPrimary, ToolsSliceDefaultItem, ToolsSliceDefault, ToolsSliceVariation, ToolsSlice };
    }
}
