/*
 * Copyright 2015-2016 OpenCB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cellbase = {
    hosts: ["bioinfodev.hpc.cam.ac.uk/cellbase-4.5.0-beta"],
    version: "v4"
};

var opencga = {
    // host: "bioinfodev.hpc.cam.ac.uk/opencga-1.0.0-rc3",
    host: "bioinfodev.hpc.cam.ac.uk/hgva-1.0.0",
    version: "v1",
    // user:  Useful scenario is user@project:study
    projects: [
        // {
        //     name: "ProjectA",
        //     alias: "proj_a",
        //     studies : [
        //         {
        //             name: "Study1",
        //             alias: "s_1"
        //         }
        //     ]
        // }
    ],
    cookies: {
        userName: "iva_userId",
        sessionId: "iva_sid"
    }
};

var beacon = {
    hosts: [
        {
            name: "Sanger Institute",
            url: "http://www.sanger.ac.uk/sanger/GA4GH_Beacon",
            queryParams: [
                "chr",
                "pos",
                "all"
            ]
        },
        // "brca-exchange",
        // "cell_lines", // http://www.sanger.ac.uk/sanger/GA4GH_Beacon?chr=?;pos=?;all=?
        // "cosmic", // http://cancer.sanger.ac.uk/api/ga4gh/beacon/query?chrom=?;pos=?;allele=?
        // "wtsi",
        // "wgs",
        // "ncbi",
        // "ebi", // http://www.ebi.ac.uk/eva/webservices/rest/v1/ga4gh/beacon?referenceName=11&start=110993&allele=INDEL&datasetIds=PRJEB4019
        // "ega", // https://ega.crg.eu/requesterportal/v1/beacon/query?alternateBases=A&assemblyId=GRCh37&datasetIds=All+GRCh37&referenceName=1&start=1000000
        // "broad", // http://beacon.broadinstitute.org/beacon/beaconVariantQueryAjax (POST- {dataset: "exac0.3", chromosome: "X", position: "20038741", allele: "G"})
        // "gigascience",
        // "ucsc",
        // "lovd", // http://hgwdev-max.cse.ucsc.edu/cgi-bin/beacon/query?track=lovd&chrom=chr1&pos=808921&allele=T
        // "hgmd",
        // "icgc", // https://dcc.icgc.org/api/v1/beacon/query?allele=C&chromosome=1&dataset=&position=29885564&reference=GRCh37
        // "sahgp"
    ]
};

var application = {
    title: "IVA",
    version: "v0.7.0",
    logo: "images/opencb-logo.png",
    menu: [
        {
            id: "samples",
            title: "Samples",
            visibility: "public"
        },
        {
            id: "browser",
            title: "Variant Browser",
            visibility: "public",
            // Allows to provide default filters for the browser
            filters: [
                {
                    name: "Example BRCA2",
                    query: {
                        gene: "BRCA2",
                        conservation: "phylop<0.001"
                    }
                },
                {
                    name: "Example OR11",
                    query: {
                        gene: "OR11H1",
                        conservation: "phylop<=0.001"
                    }
                }
            ]
        },
        {
            id: "prioritization",
            title: "Prioritization",
            visibility: "public",
            submenu: [
                {
                    id: "family-prioritization",
                    title: "Family",
                    visibility: "public"
                },
                {
                    id: "cancer-prioritization",
                    title: "Cancer",
                    visibility: "public"
                },
                {
                    separator: true,
                    visibility: "public"
                },
                {
                    id: "prioritizationCC",
                    title: "Case-Control",
                    visibility: "public"
                }
            ]
        },
        {
            id: "beacon",
            title: "Beacon",
            visibility: "public"
        },
        {
            id: "tools",
            title: "Tools",
            visibility: "public",
            submenu: [
                {
                    id: "ibs",
                    title: "IBS",
                    visibility: "public"
                },
                {
                    id: "burden",
                    title: "Burden Test",
                    visibility: "public"
                },
                {
                    separator: true,
                    visibility: "public"
                },
                {
                    id: "exporter",
                    title: "Exporter",
                    visibility: "public"
                },
                {
                    id: "saturation",
                    title: "Saturation",
                    visibility: "public"
                }
            ]
        },
        {
            id: "genomeBrowser",
            title: "Genome Browser",
            visibility: "public",
        }
    ],
    search: {
        placeholder: "Search",
        visibility: "public"
    },
    settings: {
        visibility: "public"
    },
    about: [
        {name: "Documentation",  url: "http://docs.opencb.org/display/iva/IVA+Home", icon: "fa fa-book"},
        {name: "Tutorial", url: "http://docs.opencb.org/display/iva/Tutorials", icon: ""},
        {name: "Source code", url: "https://github.com/opencb/iva", icon: "fa fa-github"},
        {name: "Contact",  url: "http://docs.opencb.org/display/iva/About", icon: "fa fa-envelope"},
        {name: "FAQ",  url: "", icon: ""}
    ],
    login: {
        visibility: "public"
    },
    breadcrumb: {
        title: "Projects",
        visibility: "public"
    }
};

var populationFrequencies = {
    // This is based on this figure:
    // http://www.dialogues-cns.com/wp-content/uploads/2015/03/DialoguesClinNeurosci-17-69-g001.jpg
    color: {
        veryRare: "red",
        rare: "yellow",
        average: "orange",
        common: "blue"
    },
    studies: [
        {
            id: "1kG_phase3",
            title: "1000 Genomes",
            populations: [
                {
                    id: "ALL",
                    title: "All populations [ALL]",
                    active: true
                },
                {
                    id: "EUR",
                    title: "European [EUR]"
                },
                {
                    id: "AMR",
                    title: "American [AMR]"
                },
                {
                    id: "AFR",
                    title: "African [AFR]"
                },
                {
                    id: "SAS",
                    title: "South Asian [SAS]"
                },
                {
                    id: "EAS",
                    title: "East Asian [EAS]"
                }
            ]
        },
        {
            id: "EXAC",
            title: "ExAC",
            populations: [
                {
                    id: "ALL",
                    title: "ExAC [ALL]"
                },
                {
                    id: "NFE",
                    title: "Non-Finnish European [NFE]"
                },
                {
                    id: "AMR",
                    title: "American [AMR]"
                },
                {
                    id: "EAS",
                    title: "East Asian [EAS]"
                },
                {
                    id: "SAS",
                    title: "South Asian [SAS]"
                }
            ]
        },
        {
            id: "ESP6500",
            title: "ESP6500",
            populations: [
                {
                    id: "EA",
                    title: "European American [EA]",
                    active: true
                },
                {
                    id: "AA",
                    title: "African American [AA]",
                    active: true
                }
            ]
        }
    ]
};

var proteinSubstitutionScores = {
    // This is to show the predictions in respective colors
    sift: {
        deleterious: "red",
        tolerated: "green"
    },
    polyphen: {
        probablyDamaging: "red",
        possiblyDamaging: "orange",
        benign: "green",
        unknown: "black"
    }
};

var consequenceTypes = {
    // This is the impact color. It allows to customise both the impact categories and desired colors
    color: {
        high: "red",
        moderate: "orange",
        low: "blue",
        modifier: "green"
    },
    /* 'Title' is optional. if there is no title provided then 'name' is going to be used.
     There are two more optional properties - 'checked' and 'color'. They can be set to display them default in web application.
     Similarly 'description' is optional as well.
     */
    categories: [
        {
            id: "",
            name: "",
            title: "Intergenic",
            description: "",
            terms: [
                {
                    id: "SO:0001631",
                    name: "upstream_gene_variant",
                    title: "upstream gene variant",
                    description: "A sequence variant located 5' of a gene",
                    impact: "modifier"
                },
                {
                    id: "SO:0001636",
                    name: "2KB_upstream_variant",
                    description: "A sequence variant located within 2KB 5' of a gene",
                    impact: "modifier"
                    // checked: true
                },
                {
                    id: "SO:0001632",
                    name: "downstream_gene_variant",
                    description: "A sequence variant located 3' of a gene",
                    impact: "modifier"
                },
                {
                    id: "SO:0002083",
                    name: "2KB_downstream_variant",
                    description: "A sequence variant located within 2KB 3' of a gene",
                    impact: "modifier"
                    // checked: true
                },
                {
                    id: "SO:0001628",
                    name: "intergenic_variant",
                    description: "A sequence variant located in the intergenic region, between genes",
                    impact: "modifier"
                }
            ]
        },
        {
            title: "Regulatory",
            terms: [
                {
                    id: "SO:0001620",
                    name: "mature_miRNA_variant",
                    description: "A transcript variant located with the sequence of the mature miRNA",
                    impact: "modifier"
                },
                {
                    id: "SO:0001894",
                    name: "regulatory_region_ablation",
                    description: "A feature ablation whereby the deleted region includes a regulatory region",
                    impact: "moderate"
                },
                {
                    id: "SO:0001891",
                    name: "regulatory_region_amplification",
                    description: "A feature amplification of a region containing a regulatory region",
                    impact: "modifier"
                },
                {
                    id: "SO:0001566",
                    name: "regulatory_region_variant",
                    description: "A sequence variant located within a regulatory region",
                    impact: "modifier"
                },
                {
                    id: "SO:0001782",
                    name: "TF_binding_site_variant",
                    description: "A sequence variant located within a transcription factor binding site",
                    impact: "modifier"
                },
                {
                    id: "SO:0001895",
                    name: "TFBS_ablation",
                    description: "A feature ablation whereby the deleted region includes a transcription factor binding site",
                    impact: "modifier"
                },
                {
                    id: "SO:0001892",
                    name: "TFBS_amplification",
                    description: "A feature amplification of a region containing a transcription factor binding site",
                    impact: "modifier"
                },
            ]
        },
        {
            title: "Coding",
            terms: [
                {
                    id: "SO:0001580",
                    name: "coding_sequence_variant",
                    description: "A sequence variant that changes the coding sequence",
                    impact: "modifier"
                },
                {
                    id: "SO:0001907",
                    name: "feature_elongation",
                    description: "A sequence variant that causes the extension of a genomic feature, with regard to the reference sequence",
                    impact: "modifier"
                },
                {
                    id: "SO:0001906",
                    name: "feature_truncation",
                    description: "A sequence variant that causes the reduction of a genomic feature, with regard to the reference sequence",
                    impact: "modifier"
                },
                {
                    id: "SO:0001589",
                    name: "frameshift_variant",
                    description: "A sequence variant which causes a disruption of the translational reading frame, because the number of nucleotides inserted or deleted is not a multiple of three",
                    impact: "high"
                },
                {
                    id: "SO:0001626",
                    name: "incomplete_terminal_codon_variant",
                    description: "A sequence variant where at least one base of the final codon of an incompletely annotated transcript is changed",
                    impact: "low"

                },
                {
                    id: "SO:0001822",
                    name: "inframe_deletion",
                    description: "An inframe non synonymous variant that deletes bases from the coding sequence",
                    impact: "moderate"
                },
                {
                    id: "SO:0001821",
                    name: "inframe_insertion",
                    description: "An inframe non synonymous variant that inserts bases into in the coding sequence",
                    impact: "moderate"
                },
                {
                    id: "SO:0001583",
                    name: "missense_variant",
                    description: "A sequence variant, that changes one or more bases, resulting in a different amino acid sequence but where the length is preserved",
                    impact: "moderate"
                },
                {
                    id: "SO:0001621",
                    name: "NMD_transcript_variant",
                    description: "A variant in a transcript that is the target of NMD",
                    impact: "modifier"
                },
                {
                    id: "SO:0001818",
                    name: "protein_altering_variant",
                    description: "A sequence_variant which is predicted to change the protein encoded in the coding sequence",
                    impact: "moderate"
                },
                {
                    id: "SO:0001819",
                    name: "synonymous_variant",
                    description: "A sequence variant where there is no resulting change to the encoded amino acid",
                    impact: "low"
                },
                {
                    id: "SO:0002012",
                    name: "start_lost",
                    description: "A codon variant that changes at least one base of the canonical start codon",
                    impact: "high"
                },
                {
                    id: "SO:0001587",
                    name: "stop_gained",
                    description: "A sequence variant whereby at least one base of a codon is changed, resulting in a premature stop codon, leading to a shortened transcript",
                    impact: "high"
                },
                {
                    id: "SO:0001578",
                    name: "stop_lost",
                    description: "A sequence variant where at least one base of the terminator codon (stop) is changed, resulting in an elongated transcript",
                    impact: "high"
                },
                {
                    id: "SO:0001567",
                    name: "stop_retained_variant",
                    description: "A sequence variant where at least one base in the terminator codon is changed, but the terminator remains",
                    impact: "low"
                },
            ]
        },
        {
            title: "Non-coding",
            terms: [
                {
                    id: "SO:0001624",
                    name: "3_prime_UTR_variant",
                    description: "A UTR variant of the 3' UTR",
                    impact: "modifier"
                },
                {
                    id: "SO:0001623",
                    name: "5_prime_UTR_variant",
                    description: "A UTR variant of the 5' UTR",
                    impact: "modifier"
                },
                {
                    id: "SO:0001627",
                    name: "intron_variant",
                    description: "A transcript variant occurring within an intron",
                    impact: "modifier"
                },
                {
                    id: "SO:0001792",
                    name: "non_coding_transcript_exon_variant",
                    description: "A sequence variant that changes non-coding exon sequence in a non-coding transcript",
                    impact: "modifier"
                }
            ]
        },
        {
            title: "Splice",
            terms: [
                {
                    id: "SO:0001574",
                    name: "splice_acceptor_variant",
                    description: "A splice variant that changes the 2 base region at the 3' end of an intron",
                    impact: "high"
                },
                {
                    id: "SO:0001575",
                    name: "splice_donor_variant",
                    description: "A splice variant that changes the 2 base pair region at the 5' end of an intron",
                    impact: "high"
                },
                {
                    id: "SO:0001630",
                    name: "splice_region_variant",
                    description: "A sequence variant in which a change has occurred within the region of the splice site, either within 1-3 bases of the exon or 3-8 bases of the intron",
                    impact: "low"
                }
            ]
        },
        {
            id: "SO:0001893",
            name: "transcript_ablation",
            description: "A feature ablation whereby the deleted region includes a transcript feature",
            impact: "high"
        },
        {
            id: "SO:0001889",
            name: "transcript_amplification",
            description: "A feature amplification of a region containing a transcript",
            impact: "high"
        }
    ]
};

var DEFAULT_SPECIES = {
    vertebrates: [
        {

            id: "hsapiens",
            scientificName: "Homo sapiens",
            assembly: {

                name: "GRCh37",
                ensemblVersion: "75_37"

            },
            assemblies: [
                {

                    name: "GRCh37",
                    ensemblVersion: "75_37"

                },
                {
                    name: "GRCh38",
                    ensemblVersion: "79_38"
                }
            ],
            data: [
                "genome",
                "gene",
                "variation",
                "regulation",
                "protein",
                "conservation",
                "clinical",
                "gene2disease"
            ]
        }
    ]
};
