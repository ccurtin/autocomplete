const completionSpec: Fig.Spec = {
  name: "aa",
  description: "Utility for managing archives",
  subcommands: [
    {
      name: "archive",
      description: "Archive the contents of a directory",
    },
    {
      name: "extract",
      description: "Extract files from an archive",
    },
    {
      name: "list",
      description: "List the contents of an archive",
    },
    {
      name: "convert",
      description: "Convert an archive into another format",
    },
    {
      name: "manifest",
      description: "Create a manifest for archiving",
    },
    {
      name: "verify",
      description: "Verify directory contents against a manifest",
    },
    {
      name: "check-and-fix",
      description: "Check and fix directory contents using a manifest",
    },
    {
      name: "append",
      description: "Append files to an existing archive",
    },
  ],
  options: [
    {
      name: ["-v", "--verbose"],
      description: "Increase verbosity level",
    },
    {
      name: ["-h", "--help"],
      description: "Show help",
    },
    {
      name: ["-i", "--input"],
      description: "Input file",
      args: {
        name: "input_file",
      },
    },
    {
      name: ["-o", "--output"],
      description: "Output file",
      args: {
        name: "output_file",
      },
    },
    {
      name: ["-d", "--directory"],
      description: "Target directory",
      args: {
        name: "dir",
      },
    },
    {
      name: "--subdir",
      description: "Target subdirectory under 'dir'",
      args: {
        name: "subdir",
      },
    },
    {
      name: ["-D", "--dir-and-subdir"],
      description: "Defines both 'dir' and 'subdir'",
      args: {
        name: "dir_and_subdir",
      },
    },
    {
      name: ["-a", "--algorithm"],
      description: "Algorithm for archive compression",
      args: {
        name: "algorithm",
        suggestions: ["lzfse", "lzma", "zlib", "lz4", "raw"],
      },
    },
    {
      name: ["-b", "--block-size"],
      description: "Block size for archive compression",
      args: {
        name: "block_size",
      },
    },
    {
      name: ["-x", "--no-cross-volumes"],
      description: "Do not cross volume boundaries when archiving",
    },
    {
      name: ["-t", "--threads"],
      description: "Number of threads for compression/decompression",
      args: {
        name: "n_threads",
      },
    },
    {
      name: ["-wt", "--writer-threads"],
      description: "Number of writer threads (extract only)",
      args: {
        name: "n_threads",
      },
    },
    {
      name: ["--enable-dedup", "--no-enable-dedup"],
      description: "Enable or disable deduplication",
    },
    {
      name: ["--enable-holes", "--no-enable-holes"],
      description: "Enable or disable hole detection and creation",
    },
    {
      name: ["--ignore-eperm", "--no-ignore-eperm"],
      description: "Ignore EPERM errors when setting file attributes",
    },
    {
      name: ["--ignore-cpio-hlc", "--no-ignore-cpio-hlc"],
      description: "Ignore NLINK and INO fields in cpio archives",
    },
    {
      name: "--manifest",
      description: "Alias for manifest options",
    },
    {
      name: "--imanifest",
      description: "Input manifest for the archive",
      args: {
        name: "input_manifest",
      },
    },
    {
      name: "--omanifest",
      description: "Output manifest for the archive",
      args: {
        name: "output_manifest",
      },
    },
    {
      name: "--list-format",
      description: "Output format for list command",
      args: {
        name: "format",
        suggestions: ["text", "json"],
      },
    },
    // Encryption options omitted for brevity
    // Entry selection options omitted for brevity
    // Archive fields options omitted for brevity
    // Entry types options omitted for brevity
  ],
};
export default completionSpec;
